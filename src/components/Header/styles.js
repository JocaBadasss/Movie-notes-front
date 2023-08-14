import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.6rem;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  border-bottom: 1px solid #3e3b47;

  > button {
    background: none;
    border: none;
    > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-weight: bold;
      font-size: 2.4rem;
    }
  }

  .search {
    width: auto;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }
`

export const Profile = styled(Link)`
  background: none;
  border: none;

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 3.5rem;
    border: 2px solid #3e3b47;
  }
`

export const Logout = styled.div`
  width: 12.5rem;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  button {
    text-align: right;

    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
