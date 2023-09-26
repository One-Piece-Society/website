import Head from "next/head";
import { type SEOProps } from "~/util/types";

type Props = { data: SEOProps & { eventId?: string } };

const environmentUrl =
  process.env.NEXT_PUBLIC_BYPASS_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;

export const baseUrl: string = environmentUrl
  ? `https://${environmentUrl}`
  : `http://localhost:3000`;

const SEO: React.FC<Props> = ({ data }) => {
  const DEFAULT_IMAGE =
    "https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png";
  const favicon = `${baseUrl}/static/favicon.ico`;

  return (
    <Head>
      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <meta
        name="keywords"
        content="unsw, UNSW, one piece, Luffy, manga, anime, Sydney"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image ?? DEFAULT_IMAGE} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="320" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content={data.url} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.image ?? DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content="Logo" />
    </Head>
  );
};
export default SEO;
