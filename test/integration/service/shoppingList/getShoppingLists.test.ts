import { ids } from '../../../../prisma/seed/constants'
import {
  clear,
  seedEvent,
  seedShoppingList,
  seedShoppingListEvent,
  seedUser,
  shutdown,
} from '../../../../prisma/seed/seed'
import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { getShoppingLists } from '../../../../src/service/shoppingList/getShoppingLists'

describe('Toggle check shopping list food', () => {
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
    {
      id: 'event_7',
      type: 'SHOPPING',
      date: new Date('2022-01-10T00:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
  ]

  const shoppingListsData: Prisma.ShoppingListCreateInput[] = [
    { id: ids.shoppingList_1, name: 'Première liste de course' },
    { id: 'shopping_list_2', name: 'Deuxième liste de course' },
  ]

  const shoppingListEventsData: Prisma.ShoppingListEventCreateInput[] = [
    {
      id: ids.shoppingListEvent_1,
      event: { connect: { id: 'event_3' } },
      shoppingList: { connect: { id: ids.shoppingList_1 } },
    },
    {
      id: 'shopping_list_event_2',
      event: { connect: { id: 'event_7' } },
      shoppingList: { connect: { id: 'shopping_list_2' } },
    },
  ]

  beforeAll(() => {
    prisma = new PrismaClient()
  })

  afterAll(() => {
    shutdown(prisma)
  })

  beforeEach(async () => {
    await seedUser(prisma, { firstName: 'Samy', username: 'Belaloui-Bertot' })
    await seedUser(prisma, { id: 'user_2', firstName: 'Jacques', username: 'Danièle' })

    for (const shoppingListData of shoppingListsData) {
      await seedShoppingList(prisma, shoppingListData)
    }

    for (const eventData of eventsData) {
      await seedEvent(prisma, eventData)
    }
    for (const shoppingListEventData of shoppingListEventsData) {
      await seedShoppingListEvent(prisma, shoppingListEventData)
    }
  })

  afterEach(async () => {
    await clear(prisma)
  })

  test('Should correctly return the shopping lists of the user', async () => {
    const shoppingLists = (await getShoppingLists(prisma, { userId: ids.user_1 })).shoppingLists

    expect(shoppingLists).not.toBeNull()
    expect(shoppingLists?.length).toBe(eventsData.filter(event => event.type === 'SHOPPING').length)
    expect(shoppingLists).toEqual(
      expect.arrayContaining(
        shoppingListsData.map(shoppingListData => expect.objectContaining(shoppingListData)),
      ),
    )
  })

  test('Should not return any shopping list if the user does not have any ones', async () => {
    const shoppingLists = (await getShoppingLists(prisma, { userId: 'user_2' })).shoppingLists

    expect(shoppingLists).not.toBeNull()
    expect(shoppingLists?.length).toBe(0)
  })
})
