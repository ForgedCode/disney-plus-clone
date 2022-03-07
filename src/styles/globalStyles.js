import { createGlobalStyle } from "styled-components";
import { v, b, t, c } from "./variables";

export const GlobalStyle = createGlobalStyle`
    
    *,
    *::after,
    &::before {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${c.white};
    }

    img {
        width: 100%;
    }

`;
