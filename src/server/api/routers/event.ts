import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.event.findMany();
  }),

  getEvent: publicProcedure.query(async ({ ctx }) => {
    const example = await ctx.prisma.event.findFirst();
    if (example) return { created: example.createdAt };
    return { created: "not found" };
  }),
});
