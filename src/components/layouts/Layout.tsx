import { DefaultSEO } from "~/util/SEO";
import Footer from "./Footer";
import Header from "./Header";
import SEO, { baseUrl } from "./SEO";
import { type SEOProps } from "~/util/types";
import { type Event } from "@prisma/client";

type Props = {
  children: React.ReactNode;
  data: Event[];
};

const Layout: React.FC<Props> = ({ children, data }) => {
  const getSEO = (): SEOProps => {
    if (!data) return DefaultSEO;
    const params = new URLSearchParams(window.location.search);
    if (!params.get("event")) return DefaultSEO;
    const eventId = params.get("event");
    const event = data.find((x) => x.id === eventId);
    if (!event) return DefaultSEO;
    return {
      title: event.title,
      description: event.description,
      image: event.image ?? "",
      url: baseUrl + "?event=" + eventId,
    };
  };

  return (
    <>
      <SEO data={getSEO()} />
      <main
        className="flex h-full w-full flex-col
      justify-between bg-primary-red text-white"
      >
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
