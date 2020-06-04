import React from "react";
import { FontFace } from "csstype";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import MontserratRegularTtf from "../fonts/montserrat/montserrat-v14-latin-regular.ttf";
import MontserratRegularWoff from "../fonts/montserrat/montserrat-v14-latin-regular.woff";
import MontserratRegularWoff2 from "../fonts/montserrat/montserrat-v14-latin-regular.woff2";

import Montserrat600Ttf from "../fonts/montserrat/montserrat-v14-latin-600.ttf";
import Montserrat600Woff from "../fonts/montserrat/montserrat-v14-latin-600.woff";
import Montserrat600Woff2 from "../fonts/montserrat/montserrat-v14-latin-600.woff2";

import Montserrat700Ttf from "../fonts/montserrat/montserrat-v14-latin-700.ttf";
import Montserrat700Woff from "../fonts/montserrat/montserrat-v14-latin-700.woff";
import Montserrat700Woff2 from "../fonts/montserrat/montserrat-v14-latin-700.woff2";

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

const MontserratRegular: FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 400,
  fontDisplay: "swap",
  src: `
    local('Montserrat Regular'),
    local('Montserrat-Regular'),
    url(${MontserratRegularTtf}) format('ttf'),
    url(${MontserratRegularWoff}) format('woff'),
    url(${MontserratRegularWoff2}) format('woff2')
  `,
};

const Montserrat600: FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontDisplay: "swap",
  src: `
    local('Montserrat SemiBold'),
    local('Montserrat-SemiBold'),
    url(${Montserrat600Ttf}) format('ttf'),
    url(${Montserrat600Woff}) format('woff'),
    url(${Montserrat600Woff2}) format('woff2')
  `,
};

const Montserrat700: FontFace = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 700,
  fontDisplay: "swap",
  src: `
    local('Montserrat Bold'),
    local('Montserrat-Bold'),
    url(${Montserrat700Ttf}) format('ttf'),
    url(${Montserrat700Woff}) format('woff'),
    url(${Montserrat700Woff2}) format('woff2')
  `,
};

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      text: {
        primary: "#676767",
        secondary: "#949494",
      },
      primary: {
        main: "#003269",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#0A6EAA",
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
          '"Montserrat"',
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
          '"Montserrat"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "2.2rem",
        fontWeight: 700,
        marginBottom: "1rem",
      },
      h3: {
        fontFamily: [
          '"Montserrat"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1.67rem",
        fontWeight: 700,
        marginBottom: "1rem",
      },
      h4: {
        fontFamily: [
          '"Montserrat"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1.55rem",
        fontWeight: 700,
        marginBottom: "1rem",
      },
      h5: {
        fontFamily: [
          '"Montserrat"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1.3rem",
        fontWeight: 700,
      },
      h6: {
        fontFamily: [
          '"Montserrat"',
          '"Helvetica"',
          '"Arial"',
          "sans-serif",
        ].join(","),
        fontSize: "1rem",
        fontWeight: 700,
      },
      body1: {
        fontSize: "1.2rem",
        fontWeight: "normal",
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
            MontserratRegular,
            Montserrat600,
            Montserrat700,
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
