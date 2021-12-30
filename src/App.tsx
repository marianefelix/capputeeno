import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme } from './styles/theme';
import GlobalStyle from './styles/global';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
