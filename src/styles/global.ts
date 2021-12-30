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

  border-style, input {
    font-family: 'Saira', sans-serif;
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
`;
