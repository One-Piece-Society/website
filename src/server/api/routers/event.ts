import { type PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const getEvent = async ({
  prisma,
  id,
}: {
  prisma: PrismaClient;
  id: string;
}) => {
  return await prisma.event.findFirstOrThrow({
    where: { id },
  });
};
export const eventRouter = createTRPCRouter({
  getEvent: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input, ctx }) => {
      if (input.id) {
        return await getEvent({ prisma: ctx.prisma, id: input.id });
      }
      throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid id" });
    }),
});
