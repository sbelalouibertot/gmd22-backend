import { UserPreference } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
    Query: {
        userPreferences: async (
            _: unknown,
            { userId }: { userId: string },
            ctx: GraphqlContext
        ): Promise<{ userPreferences: UserPreference[] | null }> => {
            const userPreferences = await ctx.prisma.userPreference.findMany({ where: { userId } });
            return { userPreferences };
        },
    },
};
