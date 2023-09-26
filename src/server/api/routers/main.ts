import {
  type Event,
  type ImagePanel,
  type Social,
  type Team,
} from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type EventPanel } from "~/util/types";

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
      panels: await ctx.prisma.eventPanel.findMany({
        include: {
          event: true,
        },
      }),
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

export type responseDataType = {
  imagePanel: ImagePanel[];
  socials: Social[];
  featureEvent: Event;
  events: Event[];
  panels: EventPanel[];
  executives: Team[];
  subcommittee: Team[];
};
