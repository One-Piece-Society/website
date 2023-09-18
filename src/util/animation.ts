import { type Transition } from "framer-motion";

export const springTransition: Transition = {
  type: "spring",
  duration: 1,
  ease: [0.4, 0.0, 0.2, 1], // You can adjust the easing values here
};
