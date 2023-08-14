import AllEventsPreview from "~/components/AllEventsPreview";
import Layout from "~/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <section>
        {/* Videos will always be paused on low battery mode for IOS */}
        <video
          className="-z-50 h-screen w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onContextMenu={(e) => e.preventDefault()} // To disable the right-click menu
          preload="auto"
          id="background-video"
        >
          <source src="/opsoc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 z-0 flex min-h-screen w-full flex-col items-center justify-center p-4  ">
          <div className="flex h-fit w-fit flex-col items-center space-y-6 rounded-xl bg-white/10 p-8 text-center drop-shadow-2xl backdrop-blur-sm">
            <h1 className="font-serif text-4xl font-semibold italic text-white/95 md:text-8xl">
              One Piece Society
            </h1>
            <div className="h-0.5 w-2/3 bg-white/95"></div>
            <p className="font-sans text-2xl font-light text-white/95 md:text-4xl">
              All things One Piece at UNSW Sydney
            </p>
          </div>
        </div>
        <div className="h-24 -translate-y-20 bg-gradient-to-b from-transparent via-[#2b93d7] to-[#2b93d7]"></div>
      </section>
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2b93d7] to-[#1a5bb9]">
        <div className="min-h-screen w-full px-4 md:container">
          <h1 className="pb-4 pt-8 font-serif text-3xl md:text-6xl">
            🏴‍☠️ About Us
          </h1>
          <p className="py-2 text-lg leading-relaxed md:text-xl">
            Dive into the world of One Piece with the UNSW Society! Join us for
            exciting discussions, anime screenings, and vibrant events that
            capture the essence of Oda&apos;s masterpiece. Whether you&apos;re a
            devoted fan or a curious newcomer, become part of our Nakama and
            experience the thrill of One Piece in a community as dynamic as the
            Grand Line itself! 🏴‍☠️🌟🌊
          </p>
          <h1 className="pb-8 pt-24 font-serif text-3xl md:text-6xl">
            🏝️ Recent Events
          </h1>
          <AllEventsPreview />
          <h1 className="pb-8 pt-24 font-serif text-3xl md:text-6xl">
            ⚓️ next section etc
          </h1>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
