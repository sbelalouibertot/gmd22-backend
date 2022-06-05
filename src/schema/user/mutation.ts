
import { UserPreference } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
    Mutation: {
        updateUserPreferences: async (
            _: unknown,
            { userPreferencesInput }: { userPreferencesInput: UserPreference[] },
            ctx: GraphqlContext
        ): Promise<{ userPreferences: UserPreference[] }> => {
            const userPreferences = await Promise.all(userPreferencesInput.map(
                userPreference => ctx.prisma.userPreference.update({
                    data: userPreference,
                    where: { id: userPreference.id }
                })
            ));
            return { userPreferences };
        },
    },
};
