import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layouts/**/*.html",
    "./src/pages/**/*.html",
    "./src/components/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
    },

    screens: {
      // 'sm': {'min': '320', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '320px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1399px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1400px'},
      // => @media (min-width: 1536px) { ... }
    },

    fluid: {
      min: "400px",
      max: "1440px",
      convertUnit: true,
      rootFontSize: "16px",
    },

    extend: {},
  },
  plugins: [
    require("tailwind-smart-fluid"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),

    iconsPlugin({
      collections: getIconCollections(["heroicons"]),
    }),
  ],
};
