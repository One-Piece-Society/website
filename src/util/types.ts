import { type PanelPosition, type Event } from "@prisma/client";

export interface EventPanel {
  id: string;
  position: PanelPosition;
  image: string;
  event: Event;
  eventId: string;
}
