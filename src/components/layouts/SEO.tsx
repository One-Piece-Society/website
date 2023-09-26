import Head from "next/head";
import { type SEOProps } from "~/util/types";

const environmentUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  process.env.NEXT_PUBLIC_BYPASS_URL ??
  "localhost:3000";

// this is so hardcoded please send help TwT ~ Hari
export const baseUrl: string = environmentUrl.startsWith("http")
  ? environmentUrl
  : `https://unsw-one-piece-society.vercel.app/`;

export const DefaultSEO: SEOProps = {
  title: "UNSW One Piece Society's Website",
  image:
    "https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png",
  description:
    "Dive into the world of One Piece with the UNSW Society! Join us for exciting discussions, anime screenings, and vibrant events that capture the essence of Oda's masterpiece. Whether you're a devoted fan or a curious newcomer, become part of our Nakama and experience the thrill of One Piece in a community as dynamic as the Grand Line itself!",
  url: baseUrl,
};

const SEO: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  const favicon = `${baseUrl}/static/favicon.ico`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="unsw, UNSW, one piece, Luffy, manga, anime, Sydney"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={DefaultSEO.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="320" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={DefaultSEO.url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Logo" />
    </Head>
  );
};
export default SEO;
