import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mainRouter = createTRPCRouter({
  getAllPageData: publicProcedure.query(async ({ ctx }) => {
    const response = {
      imagePanel: await ctx.prisma.imagePanel.findMany(),
      socials: await ctx.prisma.social.findMany(),
      events: await ctx.prisma.event.findMany(),
    };
    return response;
  }),
});
