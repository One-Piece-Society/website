import Image from "next/image";
import { type Event } from "~/util/types";

type Props = Event;

const EventCardMini: React.FC<Props> = ({
  date,
  description,
  image,
  title,
}) => {
  return (
    <div className="flex h-fit w-56 snap-x snap-center flex-col overflow-clip rounded-2xl border-2 border-white/40  drop-shadow-md backdrop-blur xs:w-72 md:h-full md:w-full md:flex-row">
      <Image
        alt="event"
        src={image}
        height={1000}
        width={1500}
        className="h-full w-full object-cover object-center md:w-1/3"
      />
      <div className="flex w-full flex-col justify-between border-l-0 border-t-2 border-white/40 bg-gradient-to-br from-white/10 to-white/20 text-white md:w-2/3 md:border-l-2 md:border-t-0">
        <div className="p-4">
          <h1 className="text-xl font-semibold xs:text-2xl md:text-4xl">
            {title}
          </h1>
          <p className="py-2 text-sm xs:text-base">
            {description.slice(0, 180)} ...
          </p>
        </div>
        <div className="h-fit rounded-b-2xl border-t-2 border-white/40 bg-gradient-to-tl from-white/10 to-white/20 md:rounded-b-none md:rounded-br-2xl">
          <p className="p-4 text-sm md:text-base">
            Date: {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventCardMini;
