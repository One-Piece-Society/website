import Image from "next/image";
type Props = {
  title: string;
  image?: string;
};
const SectionBar: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="relative h-fit w-full border-y-4 border-black">
      <h1 className="absolute z-40 flex h-32 flex-col items-center justify-center px-16 font-heading text-6xl">
        {title}
      </h1>
      <div className="absolute h-32 w-full bg-gradient-to-r from-black to-black/40"></div>
      {image && (
        <Image
          alt={title + "-banner"}
          src={image}
          height={500}
          width={2560}
          className="h-32 w-full object-cover object-center"
        />
      )}
    </div>
  );
};
export default SectionBar;
