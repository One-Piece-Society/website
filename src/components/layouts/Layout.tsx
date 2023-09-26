import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
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
  );
};

export default Layout;
