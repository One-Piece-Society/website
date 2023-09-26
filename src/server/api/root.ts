import { createTRPCRouter } from "~/server/api/trpc";
import { mainRouter } from "./routers/main";
import { eventRouter } from "./routers/event";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  main: mainRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
