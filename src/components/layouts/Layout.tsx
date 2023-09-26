import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [eventId, setEventId] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("event")) {
      const id = params.get("event");
      setEventId(id ?? "");
    }
  }, []);

  return (
    <>
      <SEO eventId={eventId} />
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
