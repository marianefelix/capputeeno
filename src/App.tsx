import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme } from './styles/theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
