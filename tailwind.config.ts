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
    extend: {
      colors: {
        "primary-red": "#C64A4A",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },

    animation: {
      "background-animate": "AnimationName 3s ease infinite",
    },
    keyframes: {
      AnimationName: {
        "0%, 100%": {
          "background-position": "0% 50%",
        },
        "50%": {
          "background-position": "100% 50%",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
