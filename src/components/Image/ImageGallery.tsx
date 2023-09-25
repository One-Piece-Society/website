import Image from "next/image";

interface Props {
  data: string[];
}

const ImageGallery: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-4 md:gap-8">
      {data.map((image, i) => (
        <div key={i} className="">
          <a
            href={image}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new tab"
          >
            <Image
              alt="event"
              src={image}
              width={500}
              height={500}
              className="aspect-square object-cover object-center"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
export default ImageGallery;
