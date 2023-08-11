import { Link } from "react-router-dom"

import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 11rem auto;
  grid-template-areas:
    "header"
    "head"
    "content";
`

export const Content = styled.main`
  display: grid;
  gap: 1.5rem;
  margin: 2.4rem 10rem 6.3rem 12.3rem;
  grid-area: content;
  overflow-y: auto;

  padding-right: 0.8rem;
`

export const Head = styled.div`
  width: 100%;

  margin-top: 2.5rem;

  grid-area: head;

  padding: 2.4rem 10rem 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled(Link)`
  width: 15.7rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 0.8rem;
  filter: ${({ $loading }) => ($loading ? "blur(1px)" : "none")};

  font-size: 1.6rem;
`
