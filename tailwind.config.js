const defautTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "768px",
    },
    colors: {
      DarkGray: " hsl(0, 0%, 63%)",
      Black: "hsl(0, 0%, 0%)",
      White: " hsl(0, 0%, 100%)",
      VeryDarkGray: "hsl(0, 0%, 27%)",
    },
    extend: {
      fontFamily: {
        sans: ['"League Spartan"', ...defautTheme.fontFamily.sans],
      },
      translate: ({ theme }) => ({
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        "2full": "200%",
      }),
    },
    letterSpacing: {
      wide: ".5rem",
      veryWide: ".75em",
    },
  },
  plugins: [],
};
