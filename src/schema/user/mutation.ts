
import { UserPreference } from "generated/prisma-client";
import { TUpdateUserPreferencesInput, updateUserPreferences } from "../../service/user/updateUserPreferences";
import { GraphqlContext } from ".././types";

export default {
    Mutation: {
        updateUserPreferences: async (
            _: unknown,
            userPreferencesInput: TUpdateUserPreferencesInput,
            ctx: GraphqlContext
        ): Promise<{ userPreferences: UserPreference[] }> => updateUserPreferences(ctx.prisma, userPreferencesInput),
    },
};
