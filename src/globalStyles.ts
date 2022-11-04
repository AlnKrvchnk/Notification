import { createGlobalStyle } from "styled-components";
import * as variable from './variables'
const fonts_url='assets/fonts/';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PlusJakartaSans';
    src: url(${fonts_url+'PlusJakartaSans-ExtraBold.ttf'}) format('truetype');
    font-weight: bold;
    font-style:normal;
  };
  @font-face {
    font-family: 'PlusJakartaSans';
    src: url(${fonts_url+'PlusJakartaSans-Medium.ttf'}) format('truetype');
    font-weight: normal;
    font-style:normal;
  };
  *{
    font-family: 'PlusJakartaSans';
    font-weight: normal;
    font-style:normal;
    font-size: 16px;
    @media (max-width: ${variable.sm}) {
        font-size: 14px;
    }
    transition: all 0.3s ease;
  }
  body{
    padding: 0 !important;
    margin: 0 !important;
  }

  
`;
export default GlobalStyle;