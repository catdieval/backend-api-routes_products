import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding-left: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

`;
