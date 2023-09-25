import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mainRouter = createTRPCRouter({
  getAllPageData: publicProcedure.query(async ({ ctx }) => {
    const response = {
      imagePanel: await ctx.prisma.imagePanel.findMany(),
      socials: await ctx.prisma.social.findMany(),
      featureEvent: await ctx.prisma.event.findFirst({
        where: { featured: true },
      }),
      events: await ctx.prisma.event.findMany({
        where: { featured: false },
      }),
      panels: await ctx.prisma.eventPanel.findMany(),
      executives: await ctx.prisma.team.findMany({
        where: {
          type: "EXECUTIVE",
        },
      }),
      subcommittee: await ctx.prisma.team.findMany({
        where: {
          type: "SUBCOMMITTEE",
        },
      }),
    };
    return response;
  }),
});
