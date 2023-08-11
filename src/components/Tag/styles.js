import { styled } from "styled-components"

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 0.8rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;
`
