import React from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

interface IThemeProps {
  children: any;
}

const theme = responsiveFontSizes(
  createMuiTheme({
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
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "3.3rem",
        fontWeight: 600,
        marginBottom: "1.4rem",
      },
      h2: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "2.4rem",
        fontWeight: 600,
        marginBottom: "1.2rem",
        color: "#003269",
      },
      h3: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "2.2rem",
        fontWeight: 600,
        marginBottom: "1.6rem",
        lineHeight: 2.4,
        color: "#003269",
      },
      h4: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1.7rem",
        fontWeight: 600,
        marginBottom: "1.4rem",
        lineHeight: 2.4,
      },
      body1: {
        fontSize: "1.2rem",
        fontWeight: "normal",
        color: "#003269",
        marginBottom: "1.2rem",
      },
      body2: {
        fontSize: "1rem",
        fontWeight: "normal",
        lineHeight: 1.4,
      },
      caption: {
        fontSize: "1.4rem",
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: "0.7rem",
        fontWeight: "normal",
        textTransform: "uppercase",
        color: "#003269",
      },
      subtitle2: {
        fontSize: "0.6rem",
        fontWeight: "normal",
        textTransform: "uppercase",
        color: "#3C3C3C",
      },
    },
    overrides: {
      MuiSwitch: {
        root: {
          height: "48px",
        },
        switchBase: {
          padding: "16px",
          "&$checked": {
            transform: "translateX(10px)",
          },
        },
        thumb: {
          width: "16px",
          height: "16px",
        },
        track: {
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          opacity: 1,
        },
        colorPrimary: {
          color: "#003269",
          "&$checked": {
            color: "#003269",
            "& + $track": {
              backgroundColor: "#ffffff",
              opacity: 1,
            },
          },
        },
      },
    },
  }),
);

function Theme(props: IThemeProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Theme;
