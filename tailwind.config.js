module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#151312",
        white: "#FFFFFF",
        nav: "#FFFFFF08", //bg-nav
        gray: "#998F8F",
        green: "#C5FF41",
        orange: "#F46C38",
        darkGray: "#6A6B6E",
        softGray: "#B6B4BD33", //#b6b4bd33
      },
    },
    screens: {
      // Custom breakpoints
      xs: "480px", // Extra small devices
      sm: "420px", // Small devices
      md: "810px", // Medium devices (Tablets)
      lg: "1080px", // Large devices (Laptops)
      xl: "1280px", // Extra large devices (Desktops)
      "2xl": "1600px", // Super wide screens

      // Adding a custom "portrait mode" breakpoint
      portrait: { raw: "(orientation: portrait)" },
    },
  },
  plugins: [],
};
