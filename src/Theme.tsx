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
        main: "#003269",
        contrastText: "#ffffff",
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
      MuiLink: {
        root: {
          color: "#00AAC8",
        },
      },
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
      MuiAvatar: {
        root: {
          width: "264px",
          height: "264px",
        },
      },
      MuiExpansionPanelSummary: {
        root: {
          fontSize: "1.2rem",
          fontWeight: 600,
          padding: "1.5rem 2.8rem",
          borderRadius: "15px 15px 0px 0px",
          color: "#003269",
          "&$expanded": {
            backgroundColor: "#0a6eaa",
            color: "#ffffff",
          },
        },
      },
      MuiExpansionPanelDetails: {
        root: {
          fontSize: "0.9rem",
          color: "#0A6EAA",
          padding: "1.5rem 2.8rem",
          borderRadius: "0px 0px 15px 15px",
        },
      },
      MuiExpansionPanel: {
        root: {
          boxShadow: "0px 2px 24px #E3E6EB",
          borderRadius: "15px 15px 15px 15px",
          marginBottom: "1.6rem",
          "&:before": {
            display: "none",
          },
        },
        rounded: {
          borderRadius: "15px",
          "&:first-child": {
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          },
          "&:last-child": {
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
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
