import { Breakpoint } from "@mui/material/styles";

// screens: {
//     'sm': '640px',
//     // => @media (min-width: 640px) { ... }

//     'md': '768px',
//     // => @media (min-width: 768px) { ... }

//     'lg': '1024px',
//     // => @media (min-width: 1024px) { ... }

//     'xl': '1280px',
//     // => @media (min-width: 1280px) { ... }

//     '2xl': '1536px',
//     // => @media (min-width: 1536px) { ... }

export const breakpoints: {
  keys: Breakpoint[];
  values: Record<Breakpoint, number>;
} = {
  keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
  values: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
};

// declare module "@mui/material/styles" {
//   interface BreakpointOverrides {
//     xs: true;
//     sm: true;
//     md: true;
//     lg: true;
//     xl: true;
//     xxl: true;
//   }
// }
