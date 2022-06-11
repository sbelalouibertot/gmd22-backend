import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { shutdown, clear, seedUser, seedEvent } from '../../../../prisma/seed/seed'
import { ids } from '../../../../prisma/seed/constants'
import { getNextEvent } from '../../../../src/service/event/getNextEvent'

describe('Get events', () => {
    let prisma: PrismaClient
    const eventsData: Prisma.EventCreateInput[] = [
        { id: ids.event_1, type: 'PERIOD_START', date: new Date("2022-01-01T00:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_2', type: 'PERIOD_END', date: new Date("2022-01-06T23:59:59.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_3', type: 'SHOPPING', date: new Date("2022-01-02T12:45:00.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_4', type: 'PREPARATION', date: new Date("2022-01-02T18:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_5', type: 'PREPARATION', date: new Date("2022-01-05T13:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_6', type: 'PERIOD_START', date: new Date("2022-01-07T00:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
    ]

    beforeAll(async () => {
        prisma = new PrismaClient()
    })

    afterAll(async () => {
        shutdown(prisma)
    })

    beforeEach(async () => {
        await seedUser(prisma, { firstName: 'Samy', username: 'Belaloui-Bertot', })
        await seedUser(prisma, { id: 'user_2', firstName: 'Jacques', username: 'Danièle', })
        for (const eventData of eventsData) {
            await seedEvent(prisma, eventData)
        }
    })

    afterEach(async () => {
        await clear(prisma)
    })

    test('Correct next event should be returned', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

        const nextEvent = (await getNextEvent(prisma, { userId: ids.user_1 })).event
        expect(nextEvent).not.toBeNull()
        expect(nextEvent).toMatchObject({ id: 'event_3' })
    })

    test('Correct next event should be returned (date before period start)', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2021-12-31T09:00:00.000Z').getTime())

        const nextEvent = (await getNextEvent(prisma, { userId: ids.user_1 })).event
        expect(nextEvent).not.toBeNull()
        expect(nextEvent).toMatchObject({ id: ids.event_1 })
    })

    test('Correct next event should be returned (date after period end)', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-08T09:00:00.000Z').getTime())

        const nextEvent = (await getNextEvent(prisma, { userId: ids.user_1 })).event
        expect(nextEvent).toBeNull()
    })


    test('No event should be returned if no user is related', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

        const nextEvent = (await getNextEvent(prisma, { userId: 'user_2' })).event
        expect(nextEvent).toBeNull()
    })

    test('Event with correct type should be returned', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

        const nextEvent = (await getNextEvent(prisma, { userId: ids.user_1, type: 'PERIOD_END' })).event
        expect(nextEvent).not.toBeNull()
        expect(nextEvent).toMatchObject({ id: 'event_2' })
    })


})