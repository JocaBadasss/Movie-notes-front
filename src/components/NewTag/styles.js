import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ $isnew, theme }) =>
    $isnew ? "transparent" : theme.COLORS.BACKGROUND_800};
  padding: 1.6rem;

  border: ${({ $isnew, theme }) =>
    $isnew ? `3px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 1rem;

  > input {
    width: ${({ $isnew }) => ($isnew ? "12rem" : "7rem")};

    border: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      display: flex;
      align-items: center;
      font-size: 2.4rem;
    }
  }
`
