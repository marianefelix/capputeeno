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

  body {
    font-family: 'Saira', sans-serif;
    background: ${({ theme }) => theme.palette.shape.grey};
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
