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
        cusblue: {
          light: "#1973C8",
          base: "#145C9E",
          dark: "#10497F",
        },
        cusbronze: {
          light: "#E0D6CC",
          base: "#CBB9A8",
          dark: "#C2AD99",
        },
        cussand: {
          light: "#EADDD7",
          base: "#DCC7BE",
          dark: "#CDAFA2",
        },
        custeal: {
          light: "#0F6C95",
          base: "#0B4F6C",
          darK: "#07364A",
        },
        cusgreen: {
          light: "#3A4832",
          base: "#1F271B",
          dark: "#131811",
        },
        // seaweed: {
        //   light: "#1EA0AE",
        //   base: "#177e89", //default
        //   dark: "#126069",
        // },
        // midnightgreen: {
        //   light: "#0c7797",
        //   base: "#084c61", //default
        //   dark: "063b4b",
        // },
        // cgred: {
        //   light: "#e36763",
        //   base: "#db3a34",
        //   dark: "#d02a25",
        // },
        // maxyellow: {
        //   light: "#ffd685",
        //   base: "#ffc857",
        //   dark: "#ffbb33",
        // },
        // jetBlack: {
        //   light: "#494647",
        //   base: "#323031",
        //   dark: "#1f1e1f",
        // },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
