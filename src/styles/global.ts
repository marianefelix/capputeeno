import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body, button, input {
    font: 400 1rem 'Saira', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.palette.shape.grey};
  }

  button {
    cursor: pointer;
    border: 0;
  }

  input {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 90%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    html {
      font-size: 83%;
    }
  }
`;
