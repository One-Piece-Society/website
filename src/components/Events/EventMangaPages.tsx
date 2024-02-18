import { useState } from "react";
import InfoBlock from "./InfoBlock";
import { type Event, type EventPanel } from "~/util/types";
import EventModal from "./EventModal";

interface Props {
  data: EventPanel[];
}

const EventMangaPages: React.FC<Props> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(
    data.find((x) => x.position === "A")?.event,
  );

  const handleClick = (position: string) => {
    setSelectedEvent(data.find((x) => x.position === position)?.event);
    setShowModal(true);
  };

  return (
    <>
      {selectedEvent && (
        <EventModal
          closeModal={() => setShowModal(false)}
          isOpen={showModal}
          data={selectedEvent}
        />
      )}
      <div className="flex h-fit w-full flex-col-reverse gap-4 drop-shadow-lg md:h-full md:flex-row md:p-4">
        {/* Left/Bottom Manga Page */}
        <div className="flex h-screen w-full flex-col gap-4 pt-6 md:h-full md:pt-0 ">
          <div
            className="h-1/2 w-full border-[3px] border-black bg-primary-red bg-cover bg-center"
            style={{
              backgroundImage: `url(${data.find((x) => x.position === "A")
                ?.image})`,
            }}
          >
            <InfoBlock
              data={{
                title: data.find((x) => x.position === "A")?.event.title ?? "",
              }}
              onChange={() => handleClick("A")}
            />
          </div>
          <div className="flex h-full flex-row gap-4 ">
            <div className="flex w-full flex-col gap-4 ">
              <div
                className="h-full w-full border-[3px] border-black bg-primary-red bg-cover bg-center"
                style={{
                  backgroundImage: `url(${data.find((x) => x.position === "B")
                    ?.image})`,
                }}
              >
                <InfoBlock
                  data={{
                    title:
                      data.find((x) => x.position === "B")?.event.title ?? "",
                  }}
                  onChange={() => handleClick("B")}
                />
              </div>
              <div
                className="h-full w-full border-[3px] border-black bg-primary-red bg-cover bg-center"
                style={{
                  backgroundImage: `url(${data.find((x) => x.position === "C")
                    ?.image})`,
                }}
              >
                <InfoBlock
                  data={{
                    title:
                      data.find((x) => x.position === "C")?.event.title ?? "",
                  }}
                  onChange={() => handleClick("C")}
                />
              </div>
            </div>
            <div
              className="flex w-full border-[3px] border-black bg-primary-red bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.find((x) => x.position === "D")
                  ?.image})`,
              }}
            >
              <InfoBlock
                data={{
                  title:
                    data.find((x) => x.position === "D")?.event.title ?? "",
                }}
                onChange={() => handleClick("D")}
              />
            </div>
          </div>
        </div>
        {/* Right/Top Manga Page */}
        <div className="flex h-[50vh] w-full flex-col gap-4 md:h-full ">
          <div className="flex h-full w-full flex-row gap-4 ">
            <div
              className="h-full w-1/3 border-[3px] border-black bg-primary-red bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.find((x) => x.position === "E")
                  ?.image})`,
              }}
            >
              <InfoBlock
                data={{
                  title:
                    data.find((x) => x.position === "E")?.event.title ?? "",
                }}
                onChange={() => handleClick("E")}
              />
            </div>
            <div
              className="h-full w-2/3 border-[3px] border-black bg-primary-red bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.find((x) => x.position === "F")
                  ?.image})`,
              }}
            >
              <InfoBlock
                data={{
                  title:
                    data.find((x) => x.position === "F")?.event.title ?? "",
                }}
                onChange={() => handleClick("F")}
              />
            </div>
          </div>
          <div
            className="flex h-full w-full border-[3px] border-black bg-primary-red bg-cover bg-center"
            style={{
              backgroundImage: `url(${data.find((x) => x.position === "G")
                ?.image})`,
            }}
          >
            <InfoBlock
              data={{
                title: data.find((x) => x.position === "G")?.event.title ?? "",
              }}
              onChange={() => handleClick("G")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventMangaPages;
