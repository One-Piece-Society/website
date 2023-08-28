import Image from "next/image";
import Layout from "~/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="flex min-h-screen w-full flex-row justify-start px-4 pt-4 md:px-16 md:pt-16">
        <div className="flex min-h-screen w-full flex-col items-start justify-center  md:w-1/3">
          <h1 className="pb-4 pt-24 font-heading text-6xl leading-normal drop-shadow-lg">
            One Piece Society
          </h1>
          <h2 className="font-body text-3xl">UNSW, Arc Supported</h2>
          <p className="py-6 font-body text-xl font-extralight leading-normal">
            Dive into the world of One Piece with the UNSW Society! Join us for
            exciting discussions, anime screenings, and vibrant events that
            capture the essence of Oda&apos;s masterpiece. Whether you&apos;re a
            devoted fan or a curious newcomer, become part of our Nakama and
            experience the thrill of One Piece in a community as dynamic as the
            Grand Line itself!
          </p>
          <button className="border border-white bg-primary-red px-8 py-4 drop-shadow-lg">
            <p className="font-body text-xl">Join our Discord</p>
          </button>
        </div>
        <div className="hidden min-h-screen w-2/3 flex-col items-start justify-center bg-fixed md:flex">
          <div className="flex h-full w-full flex-row">
            <div className="panel flex h-full w-1/3  flex-col gap-16">
              <div className="h-5/6">
                <Image
                  alt="op"
                  src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
                  width={1080}
                  height={1130}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" h-1/6">
                <Image
                  alt="op"
                  src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
                  width={1080}
                  height={1130}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="panel flex h-full w-1/3 flex-col gap-16">
              <div className=" h-1/6">
                <Image
                  alt="op"
                  src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
                  width={1080}
                  height={1130}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-5/6">
                <Image
                  alt="op"
                  src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
                  width={1080}
                  height={1130}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="panel flex h-full w-1/3  flex-col gap-16">
              <div className="h-5/6">
                <Image
                  alt="op"
                  src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
                  width={1080}
                  height={1130}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" h-1/6">
                <Image
                  alt="op"
                  src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
                  width={1080}
                  height={1130}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-48 w-full flex-row justify-start border-b-4 border-t-4 border-black px-16"></section>
    </Layout>
  );
};
export default Home;
