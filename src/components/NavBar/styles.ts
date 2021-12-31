import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  padding: 1.3rem 0;
  background-color: ${({ theme }) => theme.palette.shape.primary};
`;

export const ItemsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  & li:first-child {
    margin-right: 2rem;
  }
`;
