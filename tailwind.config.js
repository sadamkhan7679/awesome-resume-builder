/** @type {import('tailwindcss').Config} */

import { getTailwindSpacing } from "./src/helpers";

module.exports = {
  corePlugins: {
    // due to https://github.com/tailwindlabs/tailwindcss/issues/6602 - buttons disappear
    preflight: false,
  },
  important: "#__next",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: getTailwindSpacing(),
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: {
        lighter: "#ebf4ff",
        light: "#a3bffa",
        DEFAULT: "#667eea",
        dark: "#5a67d8",
        darker: "#434190",
      },
      secondary: {
        lighter: "#faf5ff",
        light: "#d6bcfa",
        DEFAULT: "#9f7aea",
        dark: "#805ad5",
        darker: "#553c9a",
      },
      omega: {
        lighter: "#edf2f7",
        light: "#e2e8f0",
        DEFAULT: "#a0aec0",
        dark: "#718096",
        darker: "#2d3748",
      },
      success: {
        light: "#f0fff4",
        DEFAULT: "#48bb78",
      },
      error: {
        light: "#fff5f5",
        DEFAULT: "#f56565",
      },
      text: "#718096",
      article: "#4a5568",
      heading: "#2d3748",
      background: "#f8f8f8",
      contentBg: "#fff",
      headerBg: "#fff",
      footerBg: "#fff",
      mute: "#e2e8f0",
      highlight: "#edf2f7",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f8f8f8",
        100: "#f1f1f1",
        200: "#e2e2e2",
        300: "#d4d4d4",
        400: "#b8b8b8",
        500: "#9c9c9c",
        600: "#8c8c8c",
        700: "#6d6d6d",
        800: "#4e4e4e",
        900: "#3f3f3f",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        openSans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
