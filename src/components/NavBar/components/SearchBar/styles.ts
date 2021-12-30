import styled from 'styled-components';

export const Container = styled.div`
  width: 22rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.palette.text.support};
  background-color: #f3f5f6;
  border-radius: 8px;

  padding: 0 1rem;

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  font-size: 0.9rem;
  font-weight: 400;

  background-color: #f3f5f6;
  border: none;
`;
