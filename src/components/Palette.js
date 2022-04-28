import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // purple gradient from darkest to lightest
  palette: {
    darkestPurple: {
      main: "#B19CD7",
    },
    darkerPurple: {
      main: "#C0AFE2",
    },
    midPurple: {
      main: "#CEC2EB",
    },
    lighterPurple: {
      main: "#DDD5F3",
    },
    lightestPurple: {
      main: "#EBE8FC",
    },
  },
});

export default function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
