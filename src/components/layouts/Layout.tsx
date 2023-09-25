import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SEO
        title="UNSW One Piece Society's Website"
        image="https://media.discordapp.net/attachments/956904556132962334/957112846716661790/One_Piece_Logo.png"
        description="Dive into the world of One Piece with the UNSW Society! Join us for exciting discussions, anime screenings, and vibrant events that capture the essence of Oda's masterpiece. Whether you're a devoted fan or a curious newcomer, become part of our Nakama and experience the thrill of One Piece in a community as dynamic as the Grand Line itself!"
      />
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
