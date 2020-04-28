import React from "react";
import { FontFace } from "csstype";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import OpenSansRegularTtf from "../fonts/open-sans/open-sans-v17-latin-regular.ttf";
import OpenSansRegularWoff from "../fonts/open-sans/open-sans-v17-latin-regular.woff";
import OpenSansRegularWoff2 from "../fonts/open-sans/open-sans-v17-latin-regular.woff2";

import OpenSans600Ttf from "../fonts/open-sans/open-sans-v17-latin-600.ttf";
import OpenSans600Woff from "../fonts/open-sans/open-sans-v17-latin-600.woff";
import OpenSans600Woff2 from "../fonts/open-sans/open-sans-v17-latin-600.woff2";

import OpenSans700Ttf from "../fonts/open-sans/open-sans-v17-latin-700.ttf";
import OpenSans700Woff from "../fonts/open-sans/open-sans-v17-latin-700.woff";
import OpenSans700Woff2 from "../fonts/open-sans/open-sans-v17-latin-700.woff2";

import LatoRegularTtf from "../fonts/lato/lato-v16-latin-regular.ttf";
import LatoRegularWoff from "../fonts/lato/lato-v16-latin-regular.woff";
import LatoRegularWoff2 from "../fonts/lato/lato-v16-latin-regular.woff2";

interface IThemeProps {
  children: any;
}

const LatoRegular: FontFace = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontDisplay: "swap",
  src: `
    local('Lato Regular'), local('Lato-Regular'),
    url(${LatoRegularTtf}) format('ttf'),
    url(${LatoRegularWoff}) format('woff'),
    url(${LatoRegularWoff2}) format('woff2')
  `,
};

const OpenSansRegular: FontFace = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontDisplay: "swap",
  src: `
    local('Open Sans Regular'),
    local('OpenSans-Regular'),
    url(${OpenSansRegularTtf}) format('ttf'),
    url(${OpenSansRegularWoff}) format('woff'),
    url(${OpenSansRegularWoff2}) format('woff2')
  `,
};

const OpenSans600: FontFace = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontDisplay: "swap",
  src: `
    local('Open Sans SemiBold'),
    local('OpenSans-SemiBold'),
    url(${OpenSans600Ttf}) format('ttf'),
    url(${OpenSans600Woff}) format('woff'),
    url(${OpenSans600Woff2}) format('woff2')
  `,
};

const OpenSans700: FontFace = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontDisplay: "swap",
  src: `
    local('Open Sans Bold'),
    local('OpenSans-Bold'),
    url(${OpenSans700Ttf}) format('ttf'),
    url(${OpenSans700Woff}) format('woff'),
    url(${OpenSans700Woff2}) format('woff2')
  `,
};

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      text: {
        primary: "#003269",
        secondary: "#0A6EAA",
      },
      primary: {
        light: "#0A6EAA",
        main: "#003269",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#00AAC8",
        contrastText: "#ffffff",
      },
      background: {
        default: "#ffffff",
      },
    },
    typography: {
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
        marginBottom: "1rem",
      },
      h2: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "2.2rem",
        fontWeight: 700,
        marginBottom: "1rem",
        color: "#003269",
      },
      h3: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1.67rem",
        fontWeight: 700,
        marginBottom: "1rem",
        color: "#003269",
      },
      h4: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1.55rem",
        fontWeight: 700,
        marginBottom: "1rem",
      },
      h6: {
        fontFamily: [
          '"Open Sans"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontWeight: 700,
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
        fontSize: "0.8rem",
        fontWeight: "normal",
        textTransform: "uppercase",
        color: "#003269",
      },
      subtitle2: {
        fontSize: "0.8rem",
        fontWeight: "normal",
        textTransform: "uppercase",
        color: "#3C3C3C",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [
            OpenSansRegular,
            OpenSans600,
            OpenSans700,
            LatoRegular,
          ],
        },
      },
      MuiContainer: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (min-width: 600px)": {
            paddingLeft: "48px",
            paddingRight: "48px",
          },
        },
      },
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
          padding: "0.5rem 2.8rem",
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
          padding: "1.2rem 2.8rem 0.5rem",
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
      MuiSelect: {
        icon: {
          color: "#0a6eaa",
        },
      },
      MuiOutlinedInput: {
        root: {
          color: "#0a6eaa",
          "&$focused": {
            notchedOutline: {
              borderColor: "#0a6eaa",
              borderWidth: "1px",
            },
          },
        },
        notchedOutline: {
          borderColor: "#0a6eaa",
        },
      },
    },
  }),
);

function Theme(props: IThemeProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Theme;
