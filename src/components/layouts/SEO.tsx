import Head from "next/head";
import { api } from "~/util/api";
import { type SEOProps } from "~/util/types";

const environmentUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  process.env.NEXT_PUBLIC_BYPASS_URL ??
  "localhost:3000";

export const baseUrl: string = environmentUrl.startsWith("http")
  ? environmentUrl
  : `https://${environmentUrl}`;

const SEO: React.FC = () => {
  const getEventName = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("event")) {
        return decodeURIComponent(params.get("event") ?? "");
      }
    }
    return "";
  };

  const favicon = `${baseUrl}/static/favicon.ico`;

  const DefaultSEO: SEOProps = {
    title: "UNSW One Piece Society's Website",
    image:
      "https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png",
    description:
      "Dive into the world of One Piece with the UNSW Society! Join us for exciting discussions, anime screenings, and vibrant events that capture the essence of Oda's masterpiece. Whether you're a devoted fan or a curious newcomer, become part of our Nakama and experience the thrill of One Piece in a community as dynamic as the Grand Line itself!",
    url: baseUrl,
  };

  const res = api.event.getEvent.useQuery({
    id: getEventName(),
  });

  let formattedTitle = DefaultSEO.title;
  let formattedDescription = DefaultSEO.description;
  let preferredImage = DefaultSEO.image;
  if (getEventName()) {
    formattedTitle = getEventName() + " | OpSoc";
    formattedDescription = res.data?.description ?? DefaultSEO.description;
    preferredImage = res.data?.image ?? DefaultSEO.image;
  }

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={DefaultSEO.description} />
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
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={formattedDescription} />
      <meta property="og:image" content={preferredImage} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="320" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={DefaultSEO.url} />
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={formattedDescription} />
      <meta property="twitter:image" content={preferredImage} />
      <meta name="twitter:image:alt" content="Logo" />
    </Head>
  );
};
export default SEO;
