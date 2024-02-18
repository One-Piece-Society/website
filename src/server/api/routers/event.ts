import { type PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fs from "fs/promises";

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
        const result = await getEvent({ prisma: ctx.prisma, id: input.id });
        await writeResultToFile("getEventResult.json", result);
        return result;
      }
      throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid id" });
    }),
});

async function writeResultToFile(filename: string, result: any): Promise<void> {
  try {
    await fs.writeFile(filename, JSON.stringify(result, null, 2));
    console.log(`Result written to ${filename}`);
  } catch (error) {
    console.error(`Error writing result to ${filename}:`, error);
  }
}
