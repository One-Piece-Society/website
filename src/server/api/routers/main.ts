import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fs from "fs/promises";

// use this for client side rendering
export const mainRouter = createTRPCRouter({
  getEvents: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.event.findMany({
      where: { featured: false },
    });
    await writeResultToFile("getEventsResult.json", result);
    return result;
  }),
  getFeaturedEvent: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.event.findFirst({
      where: { featured: true },
      include: {
        Panel: true,
      },
    });
    await writeResultToFile("getFeaturedEventResult.json", result);
    return result;
  }),
  getEventPanels: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.eventPanel.findMany({
      include: {
        event: true,
      },
    });
    await writeResultToFile("getEventPanelsResult.json", result);
    return result;
  }),
  getExecutives: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.team.findMany({
      where: {
        type: "EXECUTIVE",
      },
    });
    await writeResultToFile("getExecutivesResult.json", result);
    return result;
  }),
  getSubcommittee: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.team.findMany({
      where: {
        type: "SUBCOMMITTEE",
      },
    });
    await writeResultToFile("getSubcommitteeResult.json", result);
    return result;
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
