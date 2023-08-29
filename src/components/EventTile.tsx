import { EventData } from "~/util/data";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const EventTile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex h-96 flex-row gap-8 overflow-hidden border-b-2 border-black text-black md:flex-row">
      {EventData.slice(0, 1).map((e, i) => (
        <div
          key={i}
          className="flex w-full items-center justify-center overflow-hidden font-body"
        >
          <div
            className="relative h-full w-full bg-cover bg-center"
            // loading lower resolution because this takes a lot of time to load
            style={{
              backgroundImage: `url(${e.image + "?width=1920&height=1080"})`,
            }}
            onClick={() => setShowModal(true)}
          >
            <div className="absolute flex h-full w-1/2 flex-col items-start justify-end p-8">
              <div className="bg-white p-8 drop-shadow-lg">
                <p className="pb-2 font-body text-base font-light">Up Next</p>
                <p className="font-body text-3xl font-bold">{e.title}</p>
                <p className="font-body text-xl font-light">30th August 2023</p>
                <button
                  className="flex flex-row items-center space-x-2 pt-4"
                  onClick={() => setShowModal(true)}
                >
                  <p className="font-body text-xl font-bold text-primary-red">
                    view details
                  </p>
                  <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTile;
