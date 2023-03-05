import { extendTheme } from '@chakra-ui/react';

const colors = {
  // primary: '#9C519D',
  white: '#FFFFFF',
  black800: '#303030',
  black600: '#5A5A5A',
  black500: '#828282',
  black400: '#9E9E9E',
  black300: '#DCDCDC',
  black200: '#F1F1F1',
  black100: '#F8F8F8',
  gradation1: 'linear-gradient(135deg, #F97794 0%, #623AA2 100%)',
  pink: '#ed8599',
  yellow: '#fcd13e',
  lime: '#d9da21',
  green: '#aac836',
  skyblue: '#5dc1cf',
  primary: '#4AB9C9',
  // primary: '#46b4bc',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black800',
      bg: 'black100',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
    pre: {
      fontFamily: 'body',
      whiteSpace: 'pre-wrap',
    },
    // '::selection': {
    //   background: 'tomato',
    // },
    // '::-moz-selection': {
    //   background: 'tomato',
    // },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
  // example
};
const textStyles = {
  shadow: {
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.05)',
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
