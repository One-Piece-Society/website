import { type PanelPosition, type Event } from "@prisma/client";

export interface EventPanel {
  id: string;
  position: PanelPosition;
  image: string;
  event: Event;
  eventId: string;
}

export interface SEOProps {
  title: string;
  image?: string;
  description: string;
  url: string;
}
