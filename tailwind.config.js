/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "Poppins", "Nunito Sans", "Quicksand", "Sans-serif", "Germania One"]
    },
    fontSize: {
      xss: ".5rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    extend: {
      inset: {
        "-0.5": "-0.125rem",
        "-1": "-0.25rem"
      },
      aspectRatio: {
        1: "1",
        7: "7",
        10: "10"
      },
      colors: {
        sky: colors.sky,
        stone: colors.stone,
        slate: colors.slate,
        grape: colors.purple,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        primary: {
          100: "#E6F5F4",
          200: "#BFE5E3",
          300: "#99D6D3",
          400: "#4DB7B1",
          500: "#009890",
          600: "#008982",
          700: "#005B56",
          800: "#004441",
          900: "#002E2B"
        },
        secondary: {
          100: "#F0F1F1",
          200: "#DBDBDC",
          300: "#C5C5C6",
          400: "#999A9C",
          500: "#6D6E71",
          600: "#626366",
          700: "#414244",
          800: "#313233",
          900: "#212122"
        },
        tertiary: {
          100: "#E6F1F0",
          200: "#BFDCDB",
          300: "#99C7C5",
          400: "#4D9E99",
          500: "#00746D",
          600: "#006862",
          700: "#004641",
          800: "#003431",
          900: "#002321"
        },
        success: {
          100: "#F5FAF8",
          200: "#E7F2EE",
          300: "#D8EAE3",
          400: "#BADACF",
          500: "#9DCABA",
          600: "#8DB6A7",
          700: "#5E7970",
          800: "#475B54",
          900: "#2F3D38"
        },
        warning: {
          100: "#FDF7EA",
          200: "#F9ECCB",
          300: "#F5E0AB",
          400: "#EEC86D",
          500: "#E6B12E",
          600: "#CF9F29",
          700: "#8A6A1C",
          800: "#685015",
          900: "#45350E"
        },
        danger: {
          100: "#F7EBEA",
          200: "#EBCECC",
          300: "#DFB1AD",
          400: "#C8766F",
          500: "#B03B31",
          600: "#9E352C",
          700: "#6A231D",
          800: "#4F1B16",
          900: "#35120F"
        },
        dark: {
          100: "#E6ECEC",
          200: "#BFD0CF",
          300: "#99B3B1",
          400: "#4D7B77",
          500: "#00423D",
          600: "#003B37",
          700: "#002825",
          800: "#001E1B",
          900: "#001412"
        },
        medium: {
          100: "#F8F9F9",
          200: "#EEF0F0",
          300: "#E4E7E7",
          400: "#CFD6D5",
          500: "#BBC4C3",
          600: "#A8B0B0",
          700: "#707675",
          800: "#545858",
          900: "#383B3B"
        },
        light: {
          100: "#FDFEFE",
          200: "#FAFBFB",
          300: "#F7F9F9",
          400: "#F0F5F5",
          500: "#EAF0F0",
          600: "#D3D8D8",
          700: "#8C9090",
          800: "#696C6C",
          900: "#464848"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")]
};
