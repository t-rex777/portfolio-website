const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  ...defaultColors,
  ...{
    black: {
      500: "#1D1A1A",
      700: "#1D1D1D"
    },
    orange: {
      500: "#ED6663",
    },
  },
};
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {},
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
