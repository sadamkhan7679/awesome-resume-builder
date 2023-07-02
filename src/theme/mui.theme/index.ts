"use client";

import { createTheme } from "@mui/material/styles";
import { paletteLight, paletteDark } from "./palette";
import { typography } from "./typography";
import { components } from "./components";
import { breakpoints } from "./breakpoints";

const commonTheme = {
  typography,
  components,
  breakpoints,
};

const darkTheme = createTheme({
  palette: paletteDark,
  ...commonTheme,
});

const lightTheme = createTheme({
  palette: paletteLight,
  ...commonTheme,
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  interface PaletteOptionsOverrides {
    primary: {
      main: string;
      light: string;
      lighter: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
  }
}

export { darkTheme, lightTheme };
