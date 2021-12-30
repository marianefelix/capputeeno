import { ReactComponent as BagCart } from 'assets/icons/shopping-bagcart.svg';
import { Container, Counter } from './styles';

export function OrderCounter() {
  return (
    <Container>
      <BagCart aria-label="Ícone de sacola de compras" />
      <Counter aria-labelledby="Número de pedidos no carrinho">0</Counter>
    </Container>
  );
}
