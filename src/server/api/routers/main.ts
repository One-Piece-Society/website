import {
  type PrismaClient,
  type Event,
  type ImagePanel,
  type Social,
  type Team,
} from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type EventPanel } from "~/util/types";

// use this for server side rendering
export const getAllPageData = async ({ prisma }: { prisma: PrismaClient }) => {
  const imagePanel = await prisma.imagePanel.findMany();
  const socials = await prisma.social.findMany();
  const featureEvent = await prisma.event.findFirst({
    where: { featured: true },
  });
  const events = await prisma.event.findMany({
    where: { featured: false },
  });
  const panels = await prisma.eventPanel.findMany({
    include: {
      event: true,
    },
  });
  const executives = await prisma.team.findMany({
    where: {
      type: "EXECUTIVE",
    },
  });
  const subcommittee = await prisma.team.findMany({
    where: {
      type: "SUBCOMMITTEE",
    },
  });
  return {
    imagePanel,
    socials,
    featureEvent,
    events,
    panels,
    executives,
    subcommittee,
  };
};

// use this for client side rendering
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
  featureEvent: Event | null;
  events: Event[];
  panels: EventPanel[];
  executives: Team[];
  subcommittee: Team[];
};
