import { injectGlobal } from 'styled-components';
import mainFont from './edge-icons-Regular.woff';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
   font-family: "edgeicons";

   src: url(${mainFont}) format("woff");
  }
 *{
   margin: 0;
   padding: 0;
 }
  body{
    background-color: #e6ecf0;
    color: #14171a;
    font-size: 14px;
    line-height: 20px;
  }
`;
