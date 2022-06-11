
import { Event, EventType } from "generated/prisma-client";
import { getEvents, TEventsSearchInput } from "service/event/getEvents";
import { TNextEventInput, getNextEvent } from "service/event/getNextEvent";
import { GraphqlContext } from ".././types";

export default {
    Query: {
        event: async (
            _: unknown,
            { id }: { id: string },
            ctx: GraphqlContext
        ): Promise<{ event: Event | null }> => {
            const event = await ctx.prisma.event.findUnique({ where: { id } });
            return { event };
        },
        events: async (
            _: unknown,
            eventsSearchInput: TEventsSearchInput,
            ctx: GraphqlContext
        ): Promise<{ events: Event[] }> => getEvents(ctx.prisma, eventsSearchInput),
        nextEvent: async (
            _: unknown,
            nextEventInput: TNextEventInput,
            ctx: GraphqlContext
        ): Promise<{ event: Event | null }> => getNextEvent(ctx.prisma, nextEventInput),
    },
};
