import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.palette.shape.primary};
`;

export const ItemsList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style-type: none;

  padding: 0 10rem;
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
