import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { OrderCounter } from './components/OrderCounter';
import { SearchBar } from './components/SearchBar';
import { Box, Container, Item, ItemsList, Link } from './styles';

export function NavBar() {
  return (
    <Container role="navigation">
      <ItemsList role="list">
        <Item role="listitem">
          <Link href="/" role="link" aria-label="Ir para página inicial">
            <Logo aria-label="Logo capputeeno" />
          </Link>
        </Item>
        <Box>
          <Item role="listitem">
            <SearchBar />
          </Item>
          <Item role="listitem">
            <Link href="/" role="link" aria-label="Ir para meu carrinho">
              <OrderCounter />
            </Link>
          </Item>
        </Box>
      </ItemsList>
    </Container>
  );
}
