import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// use this for client side rendering
export const mainRouter = createTRPCRouter({
  getImagePanels: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.imagePanel.findMany(),
  ),
  getEvents: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.event.findMany({
        where: { featured: false },
      }),
  ),
  getFeaturedEvent: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.event.findFirst({
        where: { featured: true },
        include: {
          Panel: true,
        },
      }),
  ),
  getSocials: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.social.findMany(),
  ),
  getEventPanels: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.eventPanel.findMany({
        include: {
          event: true,
        },
      }),
  ),
  getExecutives: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.team.findMany({
        where: {
          type: "EXECUTIVE",
        },
      }),
  ),
  getSubcommittee: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.team.findMany({
        where: {
          type: "SUBCOMMITTEE",
        },
      }),
  ),
});
