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
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getEvent: publicProcedure.query(async ({ ctx }) => {
    const example = await ctx.prisma.example.findFirst();
    if (example) return { created: example.createdAt };
    return { created: "not found" };
  }),
});
