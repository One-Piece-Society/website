import EventCardMini from "./EventCardMini";

const AllEventsPreview = () => {
  return (
    <div className="grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-24 pb-4 md:snap-none md:grid-flow-row md:grid-cols-2 md:gap-16 md:px-0">
      <EventCardMini />
      <EventCardMini />
      <EventCardMini />
      <EventCardMini />
    </div>
  );
};

export default AllEventsPreview;
