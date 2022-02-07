module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seaweed: {
          light: "#1EA0AE",
          base: "#177e89", //default
          dark: "#126069",
        },
        midnightgreen: {
          light: "#0c7797",
          base: "#084c61", //default
          dark: "063b4b",
        },
        cgred: {
          light: "#e36763",
          base: "#db3a34",
          dark: "#d02a25",
        },
        maxyellow: {
          light: "#ffd685",
          base: "#ffc857",
          dark: "#ffbb33",
        },
        jetBlack: {
          light: "#494647",
          base: "#323031",
          dark: "#1f1e1f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
