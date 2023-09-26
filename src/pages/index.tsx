import Link from "next/link";
import EventMangaPages from "~/components/Events/EventMangaPages";
import EventTile from "~/components/Events/EventTile";
import HeroImagePanels from "~/components/Hero/HeroImagePanels";
import SectionBar from "~/components/layouts/SectionBar";
import SocialsTiles from "~/components/Socials/SocialsTiles";
import TeamTiles from "~/components/Team/TeamTiles";
import { api } from "~/util/api";
import Layout from "~/components/layouts/Layout";
import LoadingPage from "~/components/pages/LoadingPage";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [eventName, setEventName] = useState("");
  const response = api.main.getAllPageData.useQuery();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("event")) {
        setEventName(decodeURIComponent(params.get("event") ?? ""));
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!response.isSuccess || loading) return <LoadingPage />;

  return (
    <Layout eventName={eventName}>
      <section className="flex h-fit w-full flex-row justify-start px-4 pt-4 md:min-h-screen md:px-16 md:pt-16">
        <div className="flex h-fit w-full flex-col items-start justify-center md:min-h-screen  md:w-1/3">
          <h1 className="pb-4 pt-24 font-heading text-3xl leading-normal drop-shadow-lg md:text-6xl">
            One Piece Society
          </h1>
          <h2 className="font-body text-xl md:text-3xl">UNSW, Arc Supported</h2>
          <p className="py-6 font-body text-base font-extralight leading-normal md:text-xl">
            Dive into the world of One Piece with the UNSW Society! Join us for
            exciting discussions, anime screenings, and vibrant events that
            capture the essence of Oda&apos;s masterpiece. Whether you&apos;re a
            devoted fan or a curious newcomer, become part of our Nakama and
            experience the thrill of One Piece in a community as dynamic as the
            Grand Line itself!
          </p>
          <Link
            href="https://discord.gg/USxv58e7PQ"
            className="border border-white bg-primary-red px-8 py-4 drop-shadow-lg"
          >
            <p className="font-body text-base md:text-xl">Join our Discord</p>
          </Link>
        </div>
        <div className="hidden min-h-screen w-2/3 flex-col items-start justify-center bg-fixed md:flex">
          <HeroImagePanels data={response.data.imagePanel ?? []} />
        </div>
      </section>
      <section
        id="events"
        className="flex h-full w-full flex-col items-center justify-start py-16 md:py-0"
      >
        <SectionBar
          title="Events"
          image="https://12dimension.files.wordpress.com/2019/10/one_piece_ch958_p010-011-e1571959134232.jpg"
        />

        {response.data.featureEvent && (
          <div className="h-full max-h-96 w-full">
            <EventTile data={response.data.featureEvent} />
          </div>
        )}
        <div className="flex h-full w-full flex-row justify-center p-2 md:h-screen md:p-8">
          <div className="h-full w-full md:w-11/12">
            <EventMangaPages data={response.data.panels ?? []} />
          </div>
        </div>
      </section>
      <section
        id="socials"
        className="flex min-h-fit w-full flex-col items-center justify-start"
      >
        <SectionBar
          title="Socials"
          image="https://media.discordapp.net/attachments/1092987636035092662/1155801524350500894/E6hfKUdX0AQtHwU.png"
        />
        <div className="flex h-full w-full flex-row justify-center p-2 md:p-8">
          <div className="h-full w-full py-4 md:w-11/12 md:py-16">
            <SocialsTiles data={response.data.socials ?? []} />
          </div>
        </div>
      </section>
      <section
        id="team"
        className="flex h-fit w-full flex-col items-center justify-start"
      >
        <SectionBar
          title="Team"
          image="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
        />
        <div className="flex h-full w-full flex-row justify-center p-2 md:p-8">
          <div className="h-full w-full py-4 md:container md:py-16">
            <h1 className="pb-4 font-body text-2xl font-semibold md:pb-8 md:text-5xl">
              Executives
            </h1>
            <TeamTiles
              data={response.data.executives.sort((a, b) =>
                a.order >= b.order ? 1 : -1,
              )}
            />
            {response.data.subcommittee && (
              <>
                <h1 className="py-4 font-body text-2xl font-semibold md:py-8 md:text-5xl">
                  Subcommittee
                </h1>
                <TeamTiles
                  data={response.data.subcommittee.sort((a, b) =>
                    a.order >= b.order ? 1 : -1,
                  )}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
