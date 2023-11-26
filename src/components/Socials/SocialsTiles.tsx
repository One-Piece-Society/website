import { motion } from "framer-motion";
import Image from "next/image";

const SocialsTiles: React.FC = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-4 md:p-4">
      <div className="w-full md:w-3/4 md:-translate-x-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          href="https://discord.gg/USxv58e7PQ"
          className="panel1 relative flex w-full flex-row items-center "
        >
          <div className="static z-40 flex w-full flex-row items-center justify-start gap-4 bg-gradient-to-r from-blue-400  via-blue-400/80 to-blue-400/40 p-8 drop-shadow-lg md:gap-8 ">
            {/* <h2 className="text-left font-heading text-3xl md:text-6xl">
              Discord
            </h2> */}
            {/* <Image
              alt="discord-logo"
              src="/socials/discord_logo.png"
              width={250}
              height={250}
              className="h-8 w-fit object-scale-down md:h-24"
            /> */}
            <iframe
              src="https://discord.com/widget?id=949666903083868180&theme=dark"
              width="720"
              height="74"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
          <Image
            alt="banner"
            src="/socials/discord_banner.png"
            width={720}
            height={540}
            className="absolute h-full w-full object-cover"
          />
        </motion.a>
      </div>
      <div className="w-full md:w-3/4 md:translate-x-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          href="https://www.facebook.com/onepiecesociety/"
          className="panel2 relative flex w-full flex-row items-center"
        >
          <div className="static z-40 flex w-full flex-row items-center justify-end gap-4 bg-gradient-to-l from-blue-500 via-blue-500/80 to-blue-500/40 p-8 drop-shadow-lg md:gap-8">
            <h2 className="text-left font-heading text-3xl md:text-6xl">
              Facebook
            </h2>
            <Image
              alt="facebook-logo"
              src="/socials/facebook_logo.png"
              width={250}
              height={250}
              className="h-8 w-fit object-scale-down brightness-0 grayscale invert md:h-24"
            />
          </div>
          <Image
            alt="banner"
            src="/socials/facebook_banner.png"
            width={720}
            height={540}
            className="absolute h-full w-full object-cover"
          />
        </motion.a>
      </div>
      <div className="w-full md:w-3/4 md:-translate-x-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000459PRd"
          className="panel3 relative flex w-full flex-row items-center"
        >
          <div className="static z-40 flex w-full flex-row items-center justify-start gap-4 bg-gradient-to-r from-green-500 via-green-500/80 to-green-500/40 p-8 drop-shadow-lg md:gap-8">
            <Image
              alt="spArc-logo"
              src="/socials/arc_logo.png"
              width={250}
              height={250}
              className="h-8 w-fit object-scale-down md:h-24"
            />
            <h2 className="text-left font-heading text-3xl md:text-6xl">
              spArc
            </h2>
          </div>
          <Image
            alt="banner"
            src="/socials/arc_banner.png"
            width={720}
            height={540}
            className="absolute h-full w-full object-cover"
          />
        </motion.a>
      </div>
    </div>
  );
};
export default SocialsTiles;
