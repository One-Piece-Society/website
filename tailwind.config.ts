import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
} satisfies Config;
