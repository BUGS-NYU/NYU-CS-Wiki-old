import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: var(--color-secondary);
  }

`;

export default GlobalStyles;
