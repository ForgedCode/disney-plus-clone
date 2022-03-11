import { createGlobalStyle } from "styled-components";
import { v, b, t, c } from "./variables";

export const GlobalStyle = createGlobalStyle`
    
    *,
    *::after,
    &::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
        background: ${c.bg};
        color: ${c.white};
    }

    body {
        font-size: 1.6rem;
        overflow-x: hidden;
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
        object-fit: cover;
        height: 100%;
    }

`;
