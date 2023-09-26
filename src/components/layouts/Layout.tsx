import { DefaultSEO } from "~/util/SEO";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";
import { type SEOProps } from "~/util/types";

type Props = {
  children: React.ReactNode;
  eventName?: string;
};

const Layout: React.FC<Props> = ({ children, eventName }) => {
  const seoData: SEOProps & { eventName?: string } = {
    ...DefaultSEO,
    eventName,
  };
  return (
    <>
      <SEO data={seoData} />
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
