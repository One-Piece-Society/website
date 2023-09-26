import { type SEOProps } from "./types";

const environmentUrl =
  process.env.NEXT_PUBLIC_BYPASS_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;

export const baseUrl: string = environmentUrl
  ? `https://${environmentUrl}`
  : `http://localhost:3000`;

export const DefaultSEO: SEOProps = {
  title: "UNSW One Piece Society's Website",
  image:
    "https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png",
  description:
    "Dive into the world of One Piece with the UNSW Society! Join us for exciting discussions, anime screenings, and vibrant events that capture the essence of Oda's masterpiece. Whether you're a devoted fan or a curious newcomer, become part of our Nakama and experience the thrill of One Piece in a community as dynamic as the Grand Line itself!",
  url: baseUrl,
};
