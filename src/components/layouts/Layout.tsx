import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

type Props = {
  children: React.ReactNode;
  eventName?: string;
};

const Layout: React.FC<Props> = ({ children, eventName }) => {
  return (
    <>
      <SEO eventName={eventName} />
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
