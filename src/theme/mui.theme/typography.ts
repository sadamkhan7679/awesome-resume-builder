import { Typography } from "@mui/material/styles/createTypography";

const responsiveFont = (fontSize: number) => {
  return {
    fontSize: `${fontSize}px`,
    "@media (max-width: 320px)": {
      fontSize: `${fontSize * 0.5}px`,
    },
    "@media (max-width: 480px)": {
      fontSize: `${fontSize * 0.6}px`,
    },
    "@media (min-width: 481px) and (max-width: 768px)": {
      fontSize: `${fontSize * 0.7}px`,
    },
    "@media (min-width: 769px) and (max-width: 1024px)": {
      fontSize: `${fontSize * 0.8}px`,
    },
    "@media (min-width: 1025px) and (max-width: 1300px)": {
      fontSize: `${fontSize * 0.9}px`,
    },
  };
};

export const typography: Typography = {
  fontSize: 0,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  htmlFontSize: 0,
  pxToRem: function (px: number): string {
    throw new Error("Function not implemented.");
  },

  fontFamily: ["Roboto", "sans-serif"].join(","),
  h1: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(2.5),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(2.25),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(2),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(1.75),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(1.5),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(1.25),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(1),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(1),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.875),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.75),
  },
  button: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.625),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.625),
  },
  overline: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.625),
  },
};
