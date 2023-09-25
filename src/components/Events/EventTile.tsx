import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { type Event } from "@prisma/client";
import EventModal from "./EventModal";
interface Props {
  data: Event;
}

const EventTile: React.FC<Props> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const getEventCompletionStatus = (start: Date, end: Date) => {
    const now = new Date();
    if (now < start) {
      return "Up Next";
    } else if (now >= start && now <= end) {
      return "Happening Now";
    } else if (now > end) {
      return "Completed";
    }
  };

  return (
    <>
      <EventModal
        closeModal={() => setShowModal(false)}
        data={data}
        isOpen={showModal}
      />
      <div className="flex h-96 flex-row overflow-hidden border-b-2 border-black text-black md:flex-row">
        <div className="flex w-full items-center justify-center overflow-hidden font-body">
          <div
            className="relative h-full w-full bg-cover bg-center"
            // loading lower resolution because this takes a lot of time to load
            style={{
              backgroundImage: `url(${data.image + "?width=1920&height=1080"})`,
            }}
            onClick={() => setShowModal(true)}
          >
            <div className="absolute flex h-full w-1/2 flex-col items-start justify-end p-4 md:p-8">
              <div className="bg-white p-4 drop-shadow-lg md:p-8">
                <p className="pb-2 font-body text-xs font-light md:text-base">
                  {getEventCompletionStatus(data.startTime, data.endTime)}
                </p>
                <p className="font-body text-xl font-bold md:text-3xl">
                  {data.title}
                </p>
                <p className="font-body text-base font-light text-black/80 md:text-xl">
                  {data.startTime.toLocaleString("en-AU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
                <button
                  className="flex flex-row items-center space-x-2 pt-4"
                  onClick={() => setShowModal(true)}
                >
                  <p className="font-body text-base font-bold text-primary-red md:text-xl">
                    view details
                  </p>
                  <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventTile;
