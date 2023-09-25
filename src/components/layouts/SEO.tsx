import Head from "next/head";

type Props = {
  title: string;
  description: string;
  image?: string;
};

const SEO: React.FC<Props> = ({ title, description, image }) => {
  const environmentUrl =
    process.env.NEXT_PUBLIC_BYPASS_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;

  const baseUrl: string = environmentUrl
    ? `https://${environmentUrl}`
    : `http://localhost:3000`;

  const formattedTitle = `Hari Pramod | ${title}`;

  const IMAGE =
    "https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png";
  const favicon = `${baseUrl}/static/favicon.ico`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
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
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image ?? IMAGE} />

      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:image" content={image ?? IMAGE} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};
export default SEO;
