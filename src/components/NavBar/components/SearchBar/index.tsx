import { FiSearch as SearchIcon } from 'react-icons/fi';
import { Container, Input } from './styles';

export function SearchBar() {
  return (
    <Container role="searchbox">
      <Input
        role="search"
        type="text"
        placeholder="Procurando por algo específico?"
      />
      <SearchIcon aria-label="Ícone de pesquisa" />
    </Container>
  );
}
