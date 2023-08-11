import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  flex-direction: column;
`

export const Header = styled.header`
  height: 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_5};

  padding: 6.4rem 0 5.9rem 14.4rem;

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Picture = styled.div`
  width: 18.6rem;
  height: 18.6rem;

  margin: 0 auto;

  position: relative;

  margin-top: -8.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    position: absolute;
    bottom: 0;
    right: -0.1rem;

    cursor: pointer;

    border-radius: 50%;
    border: none;

    input {
      display: none;
    }

    svg {
    }
  }
`
export const Inputs = styled.form`
  max-width: 34rem;
  height: 36rem;

  margin: 6.4rem auto 0;

  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  > div:nth-child(2),
  div:nth-child(4) {
    margin-bottom: 2.4rem;
  }

  > button {
    height: 4.8rem;
  }
`
