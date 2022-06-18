import { PrismaClient, UserPreference } from 'generated/prisma-client'

export type TUpdateUserPreferencesInput = { userPreferencesInput: UserPreference[] }

export const updateUserPreferences = async (
  prisma: PrismaClient,
  { userPreferencesInput }: TUpdateUserPreferencesInput,
): Promise<{ userPreferences: UserPreference[] }> => {
  const userPreferences = await prisma.$transaction(
    userPreferencesInput.map(userPreference =>
      prisma.userPreference.update({
        data: userPreference,
        where: { id: userPreference.id },
      }),
    ),
  )
  return { userPreferences }
}
