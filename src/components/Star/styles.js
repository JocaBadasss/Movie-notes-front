import { styled } from "styled-components"
import star from "../../assets/smallStarFullfield.svg"
import starEmpty from "../../assets/smallStarEmpty.svg"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`

export const StarFullfield = styled.svg`
  background: url(${star}) no-repeat;
  width: 1.2rem;
  height: 1.2rem;
`
export const StarEmpty = styled.svg`
  background: url(${starEmpty}) no-repeat;
  width: 1.2rem;
  height: 1.2rem;
`
