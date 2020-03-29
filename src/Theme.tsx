import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

interface IThemeProps {
  children: any;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0A6EAA",
      dark: "#003269",
    },
    secondary: {
      main: "#00AAC8",
      contrastText: "#ffffff",
    },
  },
  typography: {
    htmlFontSize: 18,
    fontSize: 18,
    fontFamily: ['"Lato"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
    h1: {
      fontSize: "3.3rem",
      fontWeight: 600,
      marginBottom: "1.4rem",
    },
    h2: {
      fontSize: "2.4rem",
      fontWeight: 600,
      marginBottom: "1.2rem",
    },
    h3: {
      fontSize: "1.7rem",
      fontWeight: 600,
      marginBottom: "1.4rem",
      lineHeight: "2.4rem",
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: "normal",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "normal",
      lineHeight: "140%",
    },
    caption: {
      fontSize: "1.4rem",
      fontWeight: 600,
    },
  },
});

function Theme(props: IThemeProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Theme;
