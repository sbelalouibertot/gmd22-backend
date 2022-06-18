import { Event } from 'generated/prisma-client'

import { GraphqlContext } from '.././types'

export default {
  Mutation: {
    updateEventDate: async (
      _: unknown,
      { id, date }: { id: string; date: Date },
      ctx: GraphqlContext,
    ): Promise<{ event: Event }> => {
      const event = await ctx.prisma.event.update({ data: { date }, where: { id } })
      return { event }
    },
  },
}
