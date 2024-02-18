import { motion } from "framer-motion";
import { springTransition } from "~/util/animation";
import { type Team } from "~/util/types";

interface Props {
  data: Team[];
}

const TeamTiles: React.FC<Props> = ({ data }) => {
  const defaultTeamImage = "/opsoc-logo.webp"; // TODO: Add Default Images for Team Members
  return (
    <div className="grid h-full w-full grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
      {data.map((e, i) => (
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
                (e.image === "" ? defaultTeamImage : e.image) +
                "?width=250&height=250"
              })`,
            }}
          >
            <div className="flex h-full w-full flex-col items-start justify-end bg-black/40 p-4 opacity-0 transition-opacity duration-500 hover:opacity-100 active:opacity-100">
              <div className="bg-white p-4">
                <h1 className="text-base text-black md:text-xl">{e.name}</h1>
                <p className="text-xs text-black/60 md:text-base">
                  {e.position}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default TeamTiles;
