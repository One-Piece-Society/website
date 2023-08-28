import Image from "next/image";
type Props = {
  title: string;
  image?: string;
};
const SectionBar: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="relative h-fit w-full border-y-4 border-black">
      <h1 className="absolute z-40 flex h-24 flex-col items-center justify-center px-8 font-heading text-3xl md:px-16">
        {title}
      </h1>
      <div className="absolute h-24 w-full bg-gradient-to-r from-black to-black/40"></div>
      {image && (
        <Image
          alt={title + "-banner"}
          src={image}
          height={500}
          width={2560}
          className="h-24 w-full object-cover object-center"
        />
      )}
    </div>
  );
};
export default SectionBar;
