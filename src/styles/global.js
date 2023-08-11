import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;

    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }

    :root {
        font-size: 62.5%;
    }

    body, input, button, textarea {
        font-family: "Roboto Slab", serif;
        font-size: 1.6rem;
        outline: none;
    } 

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover  {
filter: brightness(0.9);
    
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: .8rem;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: .8rem;
    border: none;
  }
`
