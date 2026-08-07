import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #050505
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
};

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1, h2, h3, h4, h5, h5, p {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    cursor: pointer;
}

button {
    cursor: pointer;
    outline: none;
}

.container {
    width: 320px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 834px) {
        width: 834px;
        padding-left: 27px;
        padding-right: 27px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1440px) {
        width: 1440px;
        padding-left: 34px;
        padding-right: 34px;
        margin-left: auto;
        margin-right: auto;
    }
}

`;
