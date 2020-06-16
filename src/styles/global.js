import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    background: #fcfcfc;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
