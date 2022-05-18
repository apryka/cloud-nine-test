import { createGlobalStyle } from "styled-components";
import MillerBannerWoff from './fonts/MillerBanner-Light.woff';
import MillerBannerWoff2 from './fonts/MillerBanner-Light.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MillerBanner';
    src: url(${MillerBannerWoff2}) format('woff2'),
        url(${MillerBannerWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
