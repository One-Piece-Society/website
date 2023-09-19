import { type EventPanel } from "@prisma/client";

interface Props {
  data: EventPanel[];
}

const EventMangaPages: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex h-fit w-full flex-col-reverse gap-4 drop-shadow-lg md:h-full md:flex-row md:p-4">
      {/* Left/Bottom Manga Page */}
      <div className="flex h-screen w-full flex-col gap-4 md:h-full ">
        <div
          className="h-1/2 w-full border-4 border-black bg-primary-red bg-cover"
          style={{
            backgroundImage: `url(${data.find((x) => x.position === "A")
              ?.image})`,
          }}
        >
          <div>Panel A</div>
        </div>
        <div className="flex h-full flex-row gap-4 ">
          <div className="flex w-full flex-col gap-4 ">
            <div
              className="h-full w-full border-4 border-black bg-primary-red bg-cover"
              style={{
                backgroundImage: `url(${data.find((x) => x.position === "B")
                  ?.image})`,
              }}
            >
              <div>Panel B</div>
            </div>
            <div
              className="h-full w-full border-4 border-black bg-primary-red bg-cover"
              style={{
                backgroundImage: `url(${data.find((x) => x.position === "C")
                  ?.image})`,
              }}
            >
              <div>Panel C</div>
            </div>
          </div>
          <div
            className="flex w-full border-4 border-black bg-primary-red bg-cover"
            style={{
              backgroundImage: `url(${data.find((x) => x.position === "D")
                ?.image})`,
            }}
          >
            <div>Panel D</div>
          </div>
        </div>
      </div>
      {/* Right/Top Manga Page */}
      <div className="flex h-[50vh] w-full flex-col gap-4 md:h-full ">
        <div className="flex h-full w-full flex-row gap-4 ">
          <div
            className="h-full w-1/3 border-4 border-black bg-primary-red bg-cover"
            style={{
              backgroundImage: `url(${data.find((x) => x.position === "E")
                ?.image})`,
            }}
          >
            <div>Panel E</div>
          </div>
          <div
            className="h-full w-2/3 border-4 border-black bg-primary-red bg-cover"
            style={{
              backgroundImage: `url(${data.find((x) => x.position === "F")
                ?.image})`,
            }}
          >
            <div>Panel F</div>
          </div>
        </div>
        <div
          className="flex h-full w-full border-4 border-black bg-primary-red bg-cover"
          style={{
            backgroundImage: `url(${data.find((x) => x.position === "G")
              ?.image})`,
          }}
        >
          <div>Panel G</div>
        </div>
      </div>
    </div>
  );
};
export default EventMangaPages;
