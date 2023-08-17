import { EventData } from "~/util/data";
import EventCardMini from "./EventCardMini";
import { useState } from "react";

const AllEventsPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = event.currentTarget.scrollLeft;
    const cardWidth = event.currentTarget.offsetWidth; // Width of the visible container
    const calculatedIndex = Math.ceil(scrollPosition / cardWidth);
    setActiveIndex(calculatedIndex);
  };

  return (
    <div className="h-full w-full">
      <div
        className="grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden  pb-4 md:snap-none md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0"
        onScroll={handleScroll}
      >
        {EventData.map((event, i) => (
          <EventCardMini
            date={event.date}
            description={event.description}
            image={event.image}
            title={event.title}
            key={i}
          />
        ))}
      </div>

      <div className="flex h-fit w-full flex-row justify-center space-x-2 p-4">
        {EventData.map((_event, i) => (
          <div
            key={i}
            className={`h-2 w-full transform rounded-2xl transition-all duration-150 ${
              activeIndex === i ? "bg-white" : "border border-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEventsPreview;
