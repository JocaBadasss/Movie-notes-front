import { styled } from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 0.8rem;
  filter: ${({ $loading }) => ($loading ? "blur(1px)" : "none")};

  font-size: 1.6rem;
`
