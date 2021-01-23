import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    }
    *, 
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%; // 10px for easier rem sizing
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.4;
    }
    a { 
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`;

export default GlobalStyles;