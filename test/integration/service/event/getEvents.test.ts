import omit from 'lodash/omit'

import { ids } from '../../../../prisma/seed/constants'
import { clear, seedEvent, seedUser, shutdown } from '../../../../prisma/seed/seed'
import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { getEvents } from '../../../../src/service/event/getEvents'

jest.useFakeTimers().setSystemTime(new Date('2022-01-02T15:00:00.000Z').getTime())

describe('Get events', () => {
  let prisma: PrismaClient
  const eventsData: Prisma.EventCreateInput[] = [
    {
      id: ids.event_1,
      type: 'PERIOD_START',
      date: new Date('2022-01-01T00:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_2',
      type: 'PERIOD_END',
      date: new Date('2022-01-06T23:59:59.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_3',
      type: 'SHOPPING',
      date: new Date('2022-01-02T12:45:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_4',
      type: 'PREPARATION',
      date: new Date('2022-01-02T18:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_5',
      type: 'PREPARATION',
      date: new Date('2022-01-05T13:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_6',
      type: 'PERIOD_START',
      date: new Date('2022-01-07T00:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
  ]

  const isOnSameMonthAndYear = (date, year: number, month: number): boolean =>
    new Date(date).getUTCFullYear() === year && new Date(date).getUTCMonth() === month - 1

  const isOnSameDay = (date, year: number, month: number, day: number): boolean =>
    isOnSameMonthAndYear(date, year, month) && new Date(date).getUTCDate() === day

  beforeAll(() => {
    prisma = new PrismaClient()
  })

  afterAll(() => {
    shutdown(prisma)
  })

  beforeEach(async () => {
    await seedUser(prisma, { firstName: 'Samy', username: 'Belaloui-Bertot' })
    await seedUser(prisma, { id: 'user_2', firstName: 'Jacques', username: 'Danièle' })
    for (const eventData of eventsData) {
      await seedEvent(prisma, eventData)
    }
  })

  afterEach(async () => {
    await clear(prisma)
  })

  test('All events of the user should be returned', async () => {
    const allEvents = (await getEvents(prisma, { userId: ids.user_1 })).events
    expect(allEvents.length).toBe(eventsData.length)
    expect(allEvents).toEqual(
      expect.arrayContaining(
        eventsData.map(eventData => expect.objectContaining(omit(eventData, 'user'))),
      ),
    )
  })

  test('Only the events of another user should not be returned', async () => {
    const allEvents = (await getEvents(prisma, { userId: 'user_2' })).events
    expect(allEvents.length).toBe(0)

    await seedEvent(prisma, {
      id: 'event_7',
      type: 'PERIOD_START',
      date: new Date('2022-01-01T00:00:00.000Z'),
      user: { connect: { id: 'user_2' } },
    })
    const allEventsWithAnotherUser = (await getEvents(prisma, { userId: 'user_2' })).events
    expect(allEventsWithAnotherUser.length).toBe(1)
    expect(allEventsWithAnotherUser).toEqual(
      expect.arrayContaining(eventsData.map(() => expect.objectContaining({ id: 'event_7' }))),
    )
  })

  test('Only the events of the right type should be returned', async () => {
    const allEvents = (await getEvents(prisma, { userId: ids.user_1, type: 'PREPARATION' })).events
    expect(allEvents.length).toBe(eventsData.filter(event => event.type === 'PREPARATION').length)
    expect(allEvents).toEqual(
      expect.arrayContaining(
        eventsData.map(() => expect.objectContaining({ type: 'PREPARATION' })),
      ),
    )
  })

  test('Only the events of the right date should be returned', async () => {
    const allEvents = (
      await getEvents(prisma, { userId: ids.user_1, date: new Date('2022-01-02') })
    ).events

    expect(allEvents.length).toBe(
      eventsData.filter(event => isOnSameDay(event.date, 2022, 1, 2)).length,
    )

    for (const event of allEvents) {
      expect(isOnSameDay(event.date, 2022, 1, 2)).toBeTruthy()
    }
  })

  test('Only the events of the current period should be returned', async () => {
    const allEvents = (await getEvents(prisma, { userId: ids.user_1, onlyCurrentPeriod: true }))
      .events

    expect(allEvents.length).toBe(
      eventsData.filter(
        event =>
          isOnSameMonthAndYear(event.date, 2022, 1) &&
          new Date(event.date).getUTCDate() >= 1 &&
          new Date(event.date).getUTCDate() < 7,
      ).length,
    )

    for (const event of allEvents) {
      expect(
        isOnSameMonthAndYear(event.date, 2022, 1) &&
          new Date(event.date).getUTCDate() >= 1 &&
          new Date(event.date).getUTCDate() < 7,
      ).toBeTruthy()
    }
  })

  test('Only the events of the user, with the right date and the right type should be returned', async () => {
    const newEvent: Prisma.EventCreateInput = {
      id: 'event_10',
      type: 'PREPARATION',
      date: new Date('2022-01-02T21:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    }
    await seedEvent(prisma, newEvent)
    const allEvents = (
      await getEvents(prisma, {
        userId: ids.user_1,
        date: new Date('2022-01-02'),
        type: 'PREPARATION',
      })
    ).events

    expect(allEvents.length).toBe(
      [...eventsData, newEvent].filter(
        event => isOnSameDay(event.date, 2022, 1, 2) && event.type === 'PREPARATION',
      ).length,
    )

    for (const event of allEvents) {
      expect(
        isOnSameDay(event.date, 2022, 1, 2) &&
          event.type === 'PREPARATION' &&
          [...eventsData, newEvent].map(eventData => eventData.id).includes(event.id),
      ).toBeTruthy()
    }
  })
})
