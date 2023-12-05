import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: "#FFFFFF",
  black800: "#303030",
  black600: "#5A5A5A",
  black500: "#828282",
  black400: "#B6B6B6",
  black300: "#DCDCDC",
  black200: "#F1F1F1",
  black100: "#F8F8F8",
  greenToBlue: "linear-gradient(-225deg, #9bf1cb 0%, #44a1be 100%)",
  yellowToRed:
    "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  pink: "#ed8599",
  yellow: "#fcd13e",
  lime: "#d9da21",
  green: "#aac836",
  skyblue: "#5dc1cf",
  primary: "#4AB9C9",
};
const styles = {
  global: {
    "*": {},
    html: {
      fontSize: "62.5%",
    },
    body: {
      color: "black800",
      bg: "black100",
      fontSize: "1.4rem",
      fontFamily: "body",
      a: {
        textDecoration: "none",
      },
      li: {
        listStyleType: "none",
      },
    },
    pre: {
      fontFamily: "body",
      whiteSpace: "pre-wrap",
    },
    ".setGenre": {
      bg: "primary",
      color: "white",
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: "500px",
  md: "640px",
  lg: "820px",
};
const textStyles = {
  bodyW: {
    w: "90vw",
    margin: "0 auto",
  },
  lightShadow: {
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.05)",
  },
  deepShadow: {
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
  },
  tagItem: {
    w: "fit-content",
    padding: "12px 20px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    rounded: "full",
    transition: "color 0.2s, background 0.2s",
  },
  button: {
    w: "36px",
    h: "36px",
    bg: "rgba(0, 0, 0, 0.5)",
    margin: "auto",
    position: "absolute",
    rounded: "full",
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
