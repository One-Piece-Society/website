import Image from "next/image";
import { type Transition, motion } from "framer-motion";

const HeroImagePanels = () => {
  const springTransition: Transition = {
    type: "spring",
    duration: 1,
    ease: [0.4, 0.0, 0.2, 1], // You can adjust the easing values here
  };

  // Extract the numeric value from scrollYProgress
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
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
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
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
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
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
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
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
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
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
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
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
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
