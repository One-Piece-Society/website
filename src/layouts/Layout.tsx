import Header from "./Header";
// import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex h-full w-full flex-col justify-between bg-[#2b93d7] text-white">
      <div>
        <Header />
        {children}
      </div>
      <div>Footer Here</div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
