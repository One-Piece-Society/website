import AllEventsPreview from "~/components/AllEventsPreview";
import Layout from "~/layouts/Layout";

const Events = () => {
  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-row justify-center bg-gradient-to-b from-[#2b93d7] to-[#1a5bb9] p-4 pt-12">
        <div className="h-full w-full md:container ">
          <h1 className="pb-4 pt-8 font-serif text-3xl md:text-6xl">Events</h1>
          <p className="py-2 text-lg leading-relaxed md:text-xl">
            All of One Piece Society&apos;s Events
          </p>
          {/* search bar here */}
          <AllEventsPreview />
        </div>
      </div>
    </Layout>
  );
};
export default Events;
