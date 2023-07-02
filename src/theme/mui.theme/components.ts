import { Components } from "@mui/material/styles";

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#f8f8f8",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
      variant: "contained",
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "8px",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
      },
    },
    styleOverrides: {
      root: {
        fontFamily: "Roboto",
      },
    },
  },

  MuiLink: {
    defaultProps: {
      underline: "none",
    },
  },

  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: "#e0e0e0",
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiAvatar: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiToggleButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },

  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },
};
