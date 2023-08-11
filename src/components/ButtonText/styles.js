import { styled } from "styled-components"

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.PINK};
  background-color: transparent;
  border: none;

  font-size: 1.6rem;

  > svg {
    margin-right: 0.8rem;
  }
`
