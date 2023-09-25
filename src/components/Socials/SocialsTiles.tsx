import { type Social } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  data: Social[];
}

const SocialsTiles: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-4 md:p-4">
      <div className="w-full md:w-3/4 md:-translate-x-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          href={data[0]?.link ?? ""}
          className="panel1 relative flex w-full flex-row items-center "
        >
          <div className="static z-40 flex w-full flex-row items-center justify-start gap-4 bg-gradient-to-r from-blue-400  via-blue-400/80 to-blue-400/40 p-8 drop-shadow-lg md:gap-8">
            <Image
              alt={data[0]?.name + "-logo" ?? ""}
              src={data[0]?.logo ?? ""}
              width={250}
              height={250}
              className="h-8 w-fit object-scale-down md:h-24"
            />
            <h2 className="text-left font-heading text-3xl md:text-6xl">
              {data[0]?.name ?? ""}
            </h2>
          </div>
          <Image
            alt="banner"
            src={data[0]?.backgroundImage ?? ""}
            width={1135}
            height={340}
            className="absolute h-full w-full object-cover"
          />
        </motion.a>
      </div>
      <div className="w-full md:w-3/4 md:translate-x-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          href={data[1]?.link ?? ""}
          className="panel2 relative flex w-full flex-row items-center"
        >
          <div className="static z-40 flex w-full flex-row items-center justify-end gap-4 bg-gradient-to-l from-blue-500 via-blue-500/80 to-blue-500/40 p-8 drop-shadow-lg md:gap-8">
            <h2 className="text-left font-heading text-3xl md:text-6xl">
              {data[1]?.name ?? ""}
            </h2>
            <Image
              alt={data[1]?.name + "-logo" ?? ""}
              src={data[1]?.logo ?? ""}
              width={250}
              height={250}
              className="h-8 w-fit object-scale-down brightness-0 grayscale invert md:h-24"
            />
          </div>
          <Image
            alt="banner"
            src={data[1]?.backgroundImage ?? ""}
            width={1135}
            height={340}
            className="absolute h-full w-full object-cover"
          />
        </motion.a>
      </div>
      <div className="w-full md:w-3/4 md:-translate-x-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          href={data[2]?.link ?? ""}
          className="panel3 relative flex w-full flex-row items-center"
        >
          <div className="static z-40 flex w-full flex-row items-center justify-start gap-4 bg-gradient-to-r from-green-500 via-green-500/80 to-green-500/40 p-8 drop-shadow-lg md:gap-8">
            <Image
              alt={data[2]?.name + "-logo" ?? ""}
              src={data[2]?.logo ?? ""}
              width={250}
              height={250}
              className="h-8 w-fit object-scale-down md:h-24"
            />
            <h2 className="text-left font-heading text-3xl md:text-6xl">
              {data[2]?.name ?? ""}
            </h2>
          </div>
          <Image
            alt="banner"
            src={data[2]?.backgroundImage ?? ""}
            width={1135}
            height={340}
            className="absolute h-full w-full object-cover"
          />
        </motion.a>
      </div>
    </div>
  );
};
export default SocialsTiles;
