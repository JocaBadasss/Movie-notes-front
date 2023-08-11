import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: left;

  > input {
    width: 100%;
    height: 5.6rem;

    border: none;

    padding: 1.9rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    background-color: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.4rem;
    }
  }
  > svg {
    margin-left: 1.6rem;
  }
`
