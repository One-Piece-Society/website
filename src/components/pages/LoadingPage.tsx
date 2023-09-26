import Image from "next/image";
import { motion } from "framer-motion";
import { springTransition } from "~/util/animation";
import SEO from "../layouts/SEO";
const LoadingPage = () => {
  return (
    <>
      <SEO />
      <div className="flex min-h-screen w-full flex-row items-center justify-center bg-primary-red text-white">
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1.5 }}
          transition={{
            ...springTransition,
          }}
          className="h-fit w-fit"
        >
          <Image
            src="/opsoc-logo.png"
            alt="logo"
            width={400}
            height={400}
            className="h-24 w-fit object-contain"
          />
        </motion.div>
      </div>
    </>
  );
};
export default LoadingPage;
