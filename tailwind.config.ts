import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0 " },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100": { opacity: "0" },
        },
        scrollDown: {
          "0%": { top: "0" },
          "100%": { top: "80px" },
        },
        // leaves: {
        //   "0%": { opacity: "1" },
        //   "25%": { opacity: "0.75" },
        //   "50%": { opacity: "0.50" },
        //   "75%": { opacity: "0.25" },
        //   "100": { opacity: "0" },
        // },
        // enters: {
        //   "0%": { opacity: "0.25" },
        //   "50%": { opacity: "0.50" },
        //   "75%": { opacity: "0.75" },
        //   "100": { opacity: "1" },
        // },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        scrollDown: "scrollDown 0.5s ease-in-out",
        // leaves: "leaves 0.3 ease-out",
        // enters: "enters 0.3 ease-in",
      },
    },
  },
} satisfies Config;

export default config;
