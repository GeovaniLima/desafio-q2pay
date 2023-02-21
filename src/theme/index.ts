import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue_pay: "#094AEA",
    primary_blue: "#006AFF",
    color_ingressos: "#005B8E",
    text: "#262833",
    placeholder: "#A3A3A3",
    border: "#CCCED9",
    background: "#F7F8FA",
    white: "#FFFFFF",
    red: "#E01644",
    green: "#129E69"
  },
  fontWeights: {
    thin: 100,
    extra_light: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSizes: {
    tiny: 12,
    small: 13,
    regular3: 14,
    regular2: 16,
    regular1: 17,
    title3: 18,
    title2: 24,
    title1: 32,
    titleX: 64,
  }
})