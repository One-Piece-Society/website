import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
  date?: Date;
  image?: string;
};

const EventCardMini: React.FC<Props> = ({
  title = "Trivia Night",
  description = `
Have a grand time and gauge your passion at...
🎉OPSOC's One Piece Trivia Night event! 🎉
Form a crew on the day or come prepared with a team of 3 and see if you've got what it takes to become: 
Pirate Trivia Kings ☠️
Be sure to brush up on your knowledge on all things One Piece! 📚
Snacks and prizes up for grabs too! 🏆
`,
  date = new Date(),
  image = "https://media.discordapp.net/attachments/979629340973203456/994581158698422313/IMG_3511.jpg",
}) => {
  return (
    <div className="flex h-fit w-72 snap-x snap-center flex-col rounded-2xl border-2 border-white/40 bg-white/10 drop-shadow-2xl backdrop-blur md:h-full md:w-full md:flex-row">
      <Image
        alt="event"
        src={image}
        height={1000}
        width={1500}
        className="h-48 w-full rounded-t-2xl object-cover object-center md:h-full md:w-1/3 md:rounded-l-2xl md:rounded-tr-none"
      />
      <div className="flex w-full flex-col justify-between border-t-2 border-white/40 text-white md:w-2/3 md:border-l-2 md:border-t-0">
        <div className="p-4">
          <h1 className="text-2xl font-semibold md:text-4xl">{title}</h1>
          <p className="py-2 ">{description.slice(0, 180)} ...</p>
        </div>
        <div className="h-fit rounded-b-2xl border-t-2 border-white/40 bg-white/10 md:rounded-b-none md:rounded-br-2xl">
          <div className="p-4">Date: {date.toDateString()}</div>
        </div>
      </div>
    </div>
  );
};
export default EventCardMini;
