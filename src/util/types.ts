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

export type PanelPosition = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export type Event = {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  locationLink: string | null;
  image: string | null;
  online: boolean;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  imageGallery: string[];
};

export type Team = {
  id: string;
  type: "EXECUTIVE" | "SUBCOMMITTEE";
  image: string;
  name: string;
  position: string;
  order: number;
  year: number;
};
