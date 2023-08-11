import { styled } from "styled-components"
import background from "../../assets/Background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.8rem;

  padding: 0 16.3rem 0 13.4rem;

  > h2 {
    font-weight: 500;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin: 0 auto;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat no-repeat center;
  background-size: cover;
`

export const Title = styled.div`
  > h1 {
    font-size: 4.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.P};
  }
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div:nth-child(2) {
    margin-bottom: 2.4rem;
  }
`
