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
import {
  type GetServerSidePropsResult,
  type PreviewData,
  type GetServerSidePropsContext,
} from "next";
import EventModal from "~/components/Events/EventModal";
import { Tab } from "@headlessui/react";
import { Events, FeaturedEvent } from "~/util/data/events";
import { Executives, Subcommittee } from "~/util/data/team";
import { type ParsedUrlQuery } from "querystring";
import { type Event } from "~/util/types";

interface Props {
  formattedTitle: string;
  formattedDescription: string;
  preferredImage: string; // Ensure that preferredImage is always a string
  selectedEvent?: Event;
}

const Index: React.FC<Props> = ({
  formattedDescription,
  formattedTitle,
  preferredImage,
  selectedEvent,
}) => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("event: ", selectedEvent);
    if (typeof window !== undefined && selectedEvent) setShowModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {selectedEvent && (
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
                <HeroImagePanels />
              </div>
            </section>
            <section
              id="events"
              className="flex h-full w-full flex-col items-center justify-start py-16 md:py-0"
            >
              <SectionBar
                title="Events"
                image="/section/section_panel_events.webp"
              />

              <div className="h-full max-h-96 w-full">
                <EventTile data={FeaturedEvent} />
              </div>
              <div className="flex h-full w-full flex-row justify-center p-2 md:h-screen md:p-8">
                <div className="h-full w-full md:w-11/12">
                  <EventMangaPages data={Events} />
                </div>
              </div>
            </section>
            <section
              id="socials"
              className="flex min-h-fit w-full flex-col items-center justify-start"
            >
              <SectionBar
                title="Socials"
                image="/section/section_panel_socials.webp"
              />
              <div className="flex h-full w-full flex-row justify-center p-2 md:p-8">
                <div className="h-full w-full py-4 md:w-11/12 md:py-16">
                  <SocialsTiles />
                </div>
              </div>
            </section>
            <section
              id="team"
              className="flex h-fit w-full flex-col items-center justify-start"
            >
              <SectionBar
                title="Team"
                image="/section/section_panel_team.webp"
              />
              <div className="flex h-full w-full flex-row justify-center p-2 md:p-8">
                <div className="h-full w-full py-4 md:container md:py-16">
                  <Tab.Group>
                    <Tab.List className="space-x-4">
                      {Array.from(
                        new Set(Executives.map((executive) => executive.year)),
                      )
                        .sort()
                        .reverse()
                        .map((year, i) => (
                          <Tab key={i}>
                            <h1 className="pb-4 font-body text-2xl font-semibold md:pb-8 md:text-5xl">
                              {year}
                            </h1>
                          </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                      {Array.from(
                        new Set(Executives.map((executive) => executive.year)),
                      )
                        .sort()
                        .reverse()
                        .map((year, i) => (
                          <Tab.Panel key={i}>
                            <h1 className="pb-4 font-body text-2xl font-semibold md:pb-8 md:text-5xl">
                              Executives
                            </h1>
                            <TeamTiles
                              data={Executives.sort((a, b) =>
                                a.order >= b.order ? 1 : -1,
                              ).filter((e) => e.year === year)}
                            />
                            {Subcommittee.filter((e) => e.year === year)
                              .length > 0 && (
                              <>
                                <h1 className="py-4 font-body text-2xl font-semibold md:py-8 md:text-5xl">
                                  Subcommittee
                                </h1>
                                <TeamTiles
                                  data={Subcommittee.sort((a, b) =>
                                    a.order >= b.order ? 1 : -1,
                                  ).filter((e) => e.year === year)}
                                />
                              </>
                            )}
                          </Tab.Panel>
                        ))}
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </section>
          </Layout>
        </>
      )}
    </>
  );
};

// get the relevant information for SEO and event modal
export const getServerSideProps = ({
  query,
}: GetServerSidePropsContext<
  ParsedUrlQuery,
  PreviewData
>): GetServerSidePropsResult<Props> => {
  const event = query.event as string;

  // Define your default SEO values
  let formattedTitle = DefaultSEO.title;
  let formattedDescription = DefaultSEO.description;
  let preferredImage = DefaultSEO.image ?? "";

  const res = Events.find((e) => e.id === event);

  if (event && typeof event === "string" && res) {
    formattedTitle = res.event.title + " | OPsoc";
    formattedDescription = res.event.description ?? DefaultSEO.description;
    preferredImage = res.image ?? DefaultSEO.image ?? "";

    return {
      props: {
        formattedTitle,
        formattedDescription,
        preferredImage,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        selectedEvent: JSON.parse(JSON.stringify(res)),
      },
    };
  }

  return {
    props: {
      formattedTitle,
      formattedDescription,
      preferredImage,
    },
  };
};
export default Index;
