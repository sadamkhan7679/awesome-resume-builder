import { PaletteOptions } from "@mui/material/styles/createPalette";

const paletteLight: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#667eea",
    light: "#a3bffa",
    dark: "#5a67d8",
    contrastText: "#fff",
  },
  secondary: {
    main: "#9f7aea",
    light: "#d6bcfa",
    dark: "#805ad5",
    contrastText: "#fff",
  },
  error: {
    main: "#f56565",
    light: "#fff5f5",
    dark: "#c53030",
    contrastText: "#fff",
  },
  warning: {
    main: "#ecc94b",
    light: "#fffbea",
    dark: "#b7791f",
    contrastText: "#fff",
  },
  info: {
    main: "#63b3ed",
    light: "#ebf8ff",
    dark: "#3182ce",
    contrastText: "#fff",
  },
  success: {
    main: "#48bb78",
    light: "#f0fff4",
    dark: "#276749",
    contrastText: "#fff",
  },
  text: {
    primary: "#718096",
    secondary: "#4a5568",
    disabled: "#a0aec0",
  },
  background: {
    paper: "#fff",
    default: "#f8f8f8",
  },
  divider: "#e2e8f0",
  action: {
    active: "#667eea",
    hover: "#ebf4ff",
    hoverOpacity: 0.08,
    selected: "#ebf4ff",
    selectedOpacity: 0.16,
    disabled: "#e2e8f0",
    disabledBackground: "#e2e8f0",
    disabledOpacity: 0.38,
    focus: "#ebf4ff",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

const paletteDark: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#667eea",
    light: "#a3bffa",
    dark: "#5a67d8",
    contrastText: "#fff",
  },
  secondary: {
    main: "#9f7aea",
    light: "#d6bcfa",
    dark: "#805ad5",
    contrastText: "#fff",
  },
  error: {
    main: "#f56565",
    light: "#fff5f5",
    dark: "#c53030",
    contrastText: "#fff",
  },
  warning: {
    main: "#ecc94b",
    light: "#fffbea",
    dark: "#b7791f",
    contrastText: "#fff",
  },
  info: {
    main: "#63b3ed",
    light: "#ebf8ff",
    dark: "#3182ce",
    contrastText: "#fff",
  },
  success: {
    main: "#48bb78",
    light: "#f0fff4",
    dark: "#276749",
    contrastText: "#fff",
  },
  text: {
    primary: "#718096",
    secondary: "#4a5568",
    disabled: "#a0aec0",
  },
  background: {
    paper: "#2d3748",
    default: "#1a202c",
  },
  divider: "#4a5568",
  action: {
    active: "#667eea",
    hover: "#2d3748",
    hoverOpacity: 0.08,
    selected: "#2d3748",
    selectedOpacity: 0.16,
    disabled: "#4a5568",
    disabledBackground: "#4a5568",
    disabledOpacity: 0.38,
    focus: "#2d3748",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

export { paletteLight, paletteDark };
