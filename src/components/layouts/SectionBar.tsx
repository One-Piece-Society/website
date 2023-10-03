import Image from "next/image";
type Props = {
  title: string;
  image?: string;
};
const SectionBar: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="relative h-fit w-full border-y-4 border-black">
      <h1 className="absolute z-40 flex h-24 w-full flex-col items-start justify-center bg-gradient-to-r from-black to-black/40 px-8 text-left font-heading text-3xl md:px-16 md:text-6xl">
        {title}
      </h1>
      {image && (
        <Image
          alt={title + "-banner"}
          src={image}
          height={250}
          width={1080}
          className="h-24 w-full object-cover object-center"
        />
      )}
    </div>
  );
};
export default SectionBar;
