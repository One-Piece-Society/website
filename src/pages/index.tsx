import Link from "next/link";
import EventMangaPages from "~/components/Events/EventMangaPages";
import EventTile from "~/components/Events/EventTile";
import HeroImagePanels from "~/components/Hero/HeroImagePanels";
import SectionBar from "~/components/layouts/SectionBar";
import SocialsTiles from "~/components/Socials/SocialsTiles";
import TeamTiles from "~/components/Team/TeamTiles";
import Layout from "~/components/layouts/Layout";
import LoadingPage from "~/components/pages/LoadingPage";
import React, { useEffect, useState } from "react";
import SEO, { DefaultSEO } from "~/components/layouts/SEO";
import { type GetServerSidePropsResult, type GetServerSideProps } from "next";
import { getEvent } from "~/server/api/routers/event";
import { prisma } from "~/server/db";
import EventModal from "~/components/Events/EventModal";
import { type Event } from "@prisma/client";
import { api } from "~/util/api";

interface Props {
  formattedTitle: string;
  formattedDescription: string;
  preferredImage: string; // Ensure that preferredImage is always a string
}

const Index: React.FC<Props> = ({
  formattedDescription,
  formattedTitle,
  preferredImage,
}) => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const { isLoading, data } = api.main.getAllPageData.useQuery();

  useEffect(() => {
    if (typeof window !== undefined && data) {
      const params = new URLSearchParams(window.location.search);
      if (params.get("event")) {
        const eventName = decodeURIComponent(params.get("event") ?? "");
        let event = data.events.find((x) => x.id === eventName);
        if (!event) event = data.featureEvent!;
        setSelectedEvent(event);
        setShowModal(true);
      }
    }
    if (isLoading === false) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [data, isLoading]);

  return (
    <>
      <SEO
        title={formattedTitle}
        description={formattedDescription}
        image={preferredImage}
      />
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          {showModal && selectedEvent && (
            <EventModal
              closeModal={() => setShowModal(false)}
              isOpen={showModal}
              data={selectedEvent}
            />
          )}
          <Layout>
            <section className="flex h-fit w-full flex-row justify-start px-4 pt-4 md:min-h-screen md:px-16 md:pt-16">
              <div className="flex h-fit w-full flex-col items-start justify-center md:min-h-screen md:w-1/3">
                <h1 className="pb-4 pt-24 font-heading text-3xl leading-normal drop-shadow-lg md:text-6xl">
                  One Piece Society
                </h1>
                <h2 className="font-body text-xl md:text-3xl">
                  UNSW, Arc Supported
                </h2>
                <p className="py-6 font-body text-base font-extralight leading-normal md:text-xl">
                  Dive into the world of One Piece with the UNSW Society! Join
                  us for exciting Weekly read-alongs/watch-alongs, movie nights,
                  theory-crafting and discussion calls, art sessions and
                  get-togethers that capture the essence of Oda&apos;s
                  masterpiece. Whether you&apos;re a devoted fan or a curious
                  newcomer, become part of our Nakama and experience the thrill
                  of One Piece in a community as dynamic as the Grand Line
                  itself!
                </p>
                <Link
                  href="https://discord.gg/USxv58e7PQ"
                  className="border border-white bg-primary-red px-8 py-4 drop-shadow-lg"
                >
                  <p className="font-body text-base md:text-xl">
                    Join our Discord
                  </p>
                </Link>
              </div>
              <div className="hidden min-h-screen w-2/3 flex-col items-start justify-center bg-fixed md:flex">
                <HeroImagePanels data={data!.imagePanel} />
              </div>
            </section>
            <section
              id="events"
              className="flex h-full w-full flex-col items-center justify-start py-16 md:py-0"
            >
              <SectionBar
                title="Events"
                image="https://i.imgur.com/LNv7l31.jpg"
              />

              {data!.featureEvent && (
                <div className="h-full max-h-96 w-full">
                  <EventTile data={data!.featureEvent} />
                </div>
              )}
              <div className="flex h-full w-full flex-row justify-center p-2 md:h-screen md:p-8">
                <div className="h-full w-full md:w-11/12">
                  <EventMangaPages data={data!.panels} />
                </div>
              </div>
            </section>
            <section
              id="socials"
              className="flex min-h-fit w-full flex-col items-center justify-start"
            >
              <SectionBar
                title="Socials"
                image="https://i.imgur.com/4YypPSL.png"
              />
              <div className="flex h-full w-full flex-row justify-center p-2 md:p-8">
                <div className="h-full w-full py-4 md:w-11/12 md:py-16">
                  <SocialsTiles data={data!.socials} />
                </div>
              </div>
            </section>
            <section
              id="team"
              className="flex h-fit w-full flex-col items-center justify-start"
            >
              <SectionBar
                title="Team"
                image="https://i.imgur.com/BPRrehz.png"
              />
              <div className="flex h-full w-full flex-row justify-center p-2 md:p-8">
                <div className="h-full w-full py-4 md:container md:py-16">
                  <h1 className="pb-4 font-body text-2xl font-semibold md:pb-8 md:text-5xl">
                    Executives
                  </h1>
                  <TeamTiles
                    data={data!.executives.sort((a, b) =>
                      a.order >= b.order ? 1 : -1,
                    )}
                  />
                  {data!.subcommittee && (
                    <>
                      <h1 className="py-4 font-body text-2xl font-semibold md:py-8 md:text-5xl">
                        Subcommittee
                      </h1>
                      <TeamTiles
                        data={data!.subcommittee.sort((a, b) =>
                          a.order >= b.order ? 1 : -1,
                        )}
                      />
                    </>
                  )}
                </div>
              </div>
            </section>
          </Layout>
        </>
      )}
    </>
  );
};

// mainly doing this just to get the relevant information for SEO
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}): Promise<GetServerSidePropsResult<Props>> => {
  const event = query.event as string;
  const res = await getEvent({ prisma: prisma, id: event });
  // Define your default SEO values
  let formattedTitle = DefaultSEO.title;
  let formattedDescription = DefaultSEO.description;
  let preferredImage = DefaultSEO.image ?? "";

  // Check if the "event" query parameter is present
  if (event && typeof event === "string" && res) {
    formattedTitle = res.title + " | OPsoc";
    formattedDescription = res.description ?? DefaultSEO.description;
    preferredImage = res.image ?? DefaultSEO.image ?? "";
  }

  return {
    props: {
      formattedTitle,
      formattedDescription,
      preferredImage,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      //   data: JSON.parse(JSON.stringify(data)),
    },
  };
};
export default Index;
