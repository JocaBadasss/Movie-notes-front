import { styled } from "styled-components"
// import rating from "../../assets/rating2.svg"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem 20.3rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";
  > header {
    input {
      display: none;
    }
  }
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;

  grid-area: title;

  margin: 2.4rem 10rem 6.3rem 12.3rem;

  >div {
    padding-right: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 2rem;

  }
`

// export const Svg = styled.svg`
//   width: 14rem;
//   background: url(${rating}) no-repeat center center;
//   height: 4.7rem;
// `

export const By = styled.span`
  display: flex;
  gap: 0.8rem;
  > p {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    img {
      width: 1.6rem;
      height: 1.6rem;

      border-radius: 50%;
      border: 1px solid #3e3b47;
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
export const Main = styled.main`
  margin: 1.4rem 10rem 6.3rem 12.3rem;

  grid-area: content;
  overflow: auto;

  > p {
    margin-top: 4rem;
  }
`

export const Tags = styled.section`
`
