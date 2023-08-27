import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      heading: ["var(--font-Dela-Gothic-One)"],
      body: ["var(--font-DM-Sans)"],
    },
  },
  plugins: [],
} satisfies Config;
