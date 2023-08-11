import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 11.6rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";
`
export const Main = styled.main`
  margin: 2rem 10rem 6.3rem 12.3rem;
  grid-area: content;
  overflow-y: auto;
`
export const Form = styled.form`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-right: 0.8rem;
`
export const Title = styled.div`
  margin: 2.4rem 10rem 6.3rem 12.3rem;

  grid-area: title;
  > button {
    margin-bottom: 2.4rem;
  }
  > h1 {
    font-size: 3.6rem;
    font-weight: medium;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Inputs = styled.div`
  display: flex;
  gap: 4rem;

  > div {
    input[type="number"] {
      appearance: none;
      -moz-appearance: textfield;
      appearance: textfield;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 27.4rem;

  border: none;

  padding: 1.9rem;
  color: ${({theme}) => theme.COLORS.WHITE_100};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 1rem;

  resize: none;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.6rem;
  }
`
export const Tags = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: normal;

    margin-bottom: 2.4rem;
  }
  > div {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    padding: 1.6rem;

    border-radius: 0.8rem;
    background-color: #0d0c0f;
  }
`
export const Buttons = styled.section`
  > button {
    font-weight: 500;
    height: 5.6rem;
  }

  & > :first-child {
    background-color: #0d0c0f;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  display: flex;
  gap: 4rem;
`
