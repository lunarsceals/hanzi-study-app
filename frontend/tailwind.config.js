/** @type {import('tailwindcss').Config} */

import { transform } from "typescript";

const plugin = require("tailwindcss/plugin");

const flipCard = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".rotate-x-180": {
      transform: "rotateX(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisbility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background": "var(--light-background)",
        "dust-black": "var(--dust-black)",
        "dust-gray": "var(--dust-gray)",
        "coal-black": "var(--coal-black)",
        "dull-pink": "var(--dull-pink)",
        "dull-green": "var(--dull-green)",
        "dull-organge": "var(--dull-orange)",
        "dull-blue": "var(--dull-blue)",
      },
    },
  },
  plugins: [flipCard],
};
