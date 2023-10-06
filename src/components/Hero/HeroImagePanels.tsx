import Image from "next/image";
import { motion } from "framer-motion";
import { springTransition } from "~/util/animation";

const HeroImagePanels: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-row drop-shadow-lg">
      <div className="panel flex h-full w-full flex-col space-y-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springTransition, delay: 0 }}
          className="h-4/6"
        >
          <Image
            priority
            alt="op"
            src="/hero/hero_panel_a.png"
            width={540}
            height={720}
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
          className="h-2/6"
        >
          <Image
            priority
            alt="op"
            src="/hero/hero_panel_b.png"
            width={540}
            height={720}
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
          className="h-2/6 bg-fixed"
        >
          <Image
            priority
            alt="op"
            src="/hero/hero_panel_c.png"
            width={540}
            height={720}
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
          className="h-4/6"
        >
          <Image
            priority
            alt="op"
            src="/hero/hero_panel_d.jpg"
            width={540}
            height={720}
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
          className="h-4/6"
        >
          <Image
            priority
            alt="op"
            src="/hero/hero_panel_e.png"
            width={540}
            height={720}
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
          className=" h-2/6"
        >
          <Image
            priority
            alt="op"
            src="/hero/hero_panel_f.jpeg"
            width={540}
            height={720}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default HeroImagePanels;
