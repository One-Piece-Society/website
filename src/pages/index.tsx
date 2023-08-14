const Home = () => {
  return (
    <main className="bg-[#2b93d7]">
      <video
        className="-z-50 h-screen w-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/one-piece-anime.mp4" type="video/mp4" />
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
      <div className="h-screen bg-gradient-to-b from-[#2b93d7] to-[#1a5bb9]">
        More Content Here
      </div>
    </main>
  );
};
export default Home;
