import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Counter = styled.span`
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 15px;
  left: 15px;

  color: ${({ theme }) => theme.palette.shape.primary};
  font-size: 0.65rem;
  font-weight: 400;
  font-family: 'Saira', sans-serif;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.others.red};
`;
