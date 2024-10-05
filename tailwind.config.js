/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        black: "#151312",
        white: "#FFFFFF",
        gray: "#998F8F",
        green: "#C5FF41",
        orange: "#F46C38",
        darkGray: "#6A6B6E",
        softGray: "#B6B4BD33", //#b6b4bd33
      },
    },
  },
  plugins: [],
};
