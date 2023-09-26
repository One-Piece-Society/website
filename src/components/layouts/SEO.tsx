import Head from "next/head";
import { useEffect, useState } from "react";
import { DefaultSEO, baseUrl } from "~/util/SEO";
import { api } from "~/util/api";
import { type SEOProps } from "~/util/types";

const SEO: React.FC<{ eventId?: string }> = ({ eventId }) => {
  const [seoData, setSeoData] = useState<SEOProps>(DefaultSEO);
  const event = api.event.getEvent.useQuery({ id: eventId });

  useEffect(() => {
    if (event.isSuccess) {
      setSeoData({
        title: event.data.title,
        description: event.data.description + " | UNSW OpSoc",
        image: event.data.image ?? "",
        url: baseUrl + "?event=" + eventId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event.isSuccess]);

  const DEFAULT_IMAGE =
    "https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png";
  const favicon = `${baseUrl}/static/favicon.ico`;

  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      <meta
        name="keywords"
        content="unsw, UNSW, one piece, Luffy, manga, anime, Sydney"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image ?? DEFAULT_IMAGE} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="320" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image ?? DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content="Logo" />
    </Head>
  );
};
export default SEO;
