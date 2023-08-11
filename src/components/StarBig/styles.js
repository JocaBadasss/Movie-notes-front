import { styled } from "styled-components"
import star from "../../assets/bigStarFullfield.svg"
import starEmpty from "../../assets/bigStarEmpty.svg"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`

export const StarFullfield = styled.svg`
  background: url(${star}) no-repeat;
  width: 2rem;
  height: 2rem;
`
export const StarEmpty = styled.svg`
  background: url(${starEmpty}) no-repeat;
  width: 2rem;
  height: 2rem;
`
