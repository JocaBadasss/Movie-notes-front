import { styled } from "styled-components"
import ratingStarFullfield from "../../assets/smallStarFullfield.svg"

export const Container = styled.button`
  width: 100%;
  height: 22.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border: none;

  border-radius: 1.6rem;
  padding: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_5};
  overflow: hidden;

  > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    text-align: left;

    height: 4.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
export const Title = styled.div`
  height: 5.2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    margin-bottom: 0.8rem;
    text-align: left;
  }
  margin-bottom: 0.8rem;
`

export const Svg = styled.svg`
  background: url(${ratingStarFullfield}) no-repeat;
`
