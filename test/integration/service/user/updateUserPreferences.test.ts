import omit from 'lodash/omit'

import { ids } from '../../../../prisma/seed/constants'
import { clear, seedUser, seedUserPreference, shutdown } from '../../../../prisma/seed/seed'
import { Prisma, PrismaClient, UserPreference } from '../../../../src/generated/prisma-client'
import { updateUserPreferences } from '../../../../src/service/user/updateUserPreferences'

describe('Update user preferences', () => {
  let prisma: PrismaClient

  const userPreferencesData: Prisma.UserPreferenceCreateInput[] = [
    {
      id: ids.userPreference_1,
      user: { connect: { id: ids.user_1 } },
      type: 'MAX_RECIPES_PER_WEEK',
      value: 5,
    },
    {
      id: 'user_preference_2',
      user: { connect: { id: ids.user_1 } },
      type: 'SHOPPING_WEEKS_INTERVAL',
      value: 3,
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

    for (const userPreferenceData of userPreferencesData) {
      await seedUserPreference(prisma, userPreferenceData)
    }
  })

  afterEach(async () => {
    await clear(prisma)
  })

  test('Should correctly update user preference of the right user (1)', async () => {
    const initialUserPreferences = await prisma.userPreference.findMany({
      where: { userId: ids.user_1 },
    })
    expect(initialUserPreferences).toEqual(
      expect.arrayContaining(
        userPreferencesData.map(userPreferenceData =>
          expect.objectContaining(omit(userPreferenceData, 'user')),
        ),
      ),
    )

    const newUserPreferencesInput: UserPreference[] = [
      { id: ids.userPreference_1, userId: ids.user_1, type: 'MAX_RECIPES_PER_WEEK', value: 4 },
      { id: 'user_preference_2', userId: ids.user_1, type: 'SHOPPING_WEEKS_INTERVAL', value: 2 },
    ]
    await updateUserPreferences(prisma, { userPreferencesInput: newUserPreferencesInput })

    const newUserPreferences = await prisma.userPreference.findMany({
      where: { userId: ids.user_1 },
    })
    expect(newUserPreferences).toEqual(
      expect.arrayContaining(
        newUserPreferencesInput.map(userPreferenceData =>
          expect.objectContaining(userPreferenceData),
        ),
      ),
    )
  })

  test('Should correctly update user preference of the right user (2)', async () => {
    const userPreference: Prisma.UserPreferenceCreateInput = {
      id: 'user_preference_3',
      type: 'SHOPPING_WEEKS_INTERVAL',
      value: 1,
      user: { connect: { id: 'user_2' } },
    }
    await seedUserPreference(prisma, userPreference)

    const initialUserPreferences = await prisma.userPreference.findMany({
      where: { userId: 'user_2' },
    })

    expect(initialUserPreferences.length).toBe(1)
    expect(initialUserPreferences[0]).toMatchObject(omit(userPreference, 'user'))

    const newUserPreferencesInput: UserPreference[] = [
      { id: 'user_preference_3', userId: 'user_2', type: 'SHOPPING_WEEKS_INTERVAL', value: 2 },
    ]
    await updateUserPreferences(prisma, { userPreferencesInput: newUserPreferencesInput })

    const newUserPreferences = await prisma.userPreference.findMany({ where: { userId: 'user_2' } })
    expect(newUserPreferences.length).toBe(1)
    expect(newUserPreferences[0]).toMatchObject(newUserPreferencesInput[0])
  })
})
