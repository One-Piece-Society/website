import { EventData } from "~/util/data";
import EventCardMini from "./EventCardMini";

const AllEventsPreview = () => {
  return (
    <div className="grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-24 pb-4 md:snap-none md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0">
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
  );
};

export default AllEventsPreview;
