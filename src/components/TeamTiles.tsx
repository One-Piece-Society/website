/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Transition, motion } from "framer-motion";

const TeamTiles = () => {
  const springTransition: Transition = {
    type: "spring",
    duration: 1,
    ease: [0.4, 0.0, 0.2, 1], // You can adjust the easing values here
  };
  return (
    <div className="grid h-full w-full grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
      {[...Array(7)].map((e, i) => (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ...springTransition,
            delay: i / 10,
          }}
          key={i}
        >
          <div
            className="relative aspect-square h-fit w-full overflow-clip bg-contain bg-center bg-no-repeat object-scale-down transition-all duration-500 ease-in-out"
            // loading lower resolution because this takes a lot of time to load
            style={{
              backgroundImage: `url(${
                "https://media.discordapp.net/attachments/1092987636035092662/1146437571237388429/zoro-pfp-02.png" +
                "?width=500&height=500"
              })`,
            }}
          >
            <div className="flex h-full w-full flex-col items-start justify-end bg-black/40 p-4 opacity-0 transition-opacity duration-500 hover:opacity-100 active:opacity-100 ">
              <div className="bg-white p-4">
                <h1 className="text-base text-black md:text-xl">Name Here</h1>
                <p className="text-xs text-black/60 md:text-base">President</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default TeamTiles;
