import AllEventsPreview from "~/components/AllEventsPreview";
import Layout from "~/layouts/Layout";

const Events = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <section className="h-full w-full pt-12 md:container">
          <h1 className="pb-4 pt-8 font-serif text-3xl md:text-6xl">Events</h1>
          <p className="py-2 text-lg leading-relaxed md:text-xl">
            All of One Piece Society&apos;s Events
          </p>
          {/* search bar here */}
          <AllEventsPreview />
        </section>
      </div>
    </Layout>
  );
};
export default Events;
