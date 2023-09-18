import Image from "next/image";
import { motion } from "framer-motion";
import { type ImagePanel } from "@prisma/client";
import { springTransition } from "~/util/animation";

interface Props {
  data: ImagePanel[];
}

const HeroImagePanels: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex h-full w-full flex-row drop-shadow-lg">
      <div className="panel flex h-full w-full flex-col space-y-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springTransition, delay: 0 }}
          className="h-5/6"
        >
          <Image
            alt="op"
            src={data.find((e) => e.position === "A")?.image ?? ""}
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ...springTransition,
            delay: 0.1,
          }}
          className="h-1/6"
        >
          <Image
            alt="op"
            src={data.find((e) => e.position === "B")?.image ?? ""}
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="panel flex h-full w-full flex-col space-y-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ...springTransition,
            delay: 0.2,
          }}
          className="h-1/6 bg-fixed"
        >
          <Image
            alt="op"
            src={data.find((e) => e.position === "C")?.image ?? ""}
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ...springTransition,
            delay: 0.3,
          }}
          className="h-5/6"
        >
          <Image
            alt="op"
            src={data.find((e) => e.position === "D")?.image ?? ""}
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="panel flex h-full w-full  flex-col space-y-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ...springTransition,
            delay: 0.4,
          }}
          className="h-5/6"
        >
          <Image
            alt="op"
            src={data.find((e) => e.position === "E")?.image ?? ""}
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ...springTransition,
            delay: 0.5,
          }}
          className=" h-1/6"
        >
          <Image
            alt="op"
            src={data.find((e) => e.position === "F")?.image ?? ""}
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default HeroImagePanels;
