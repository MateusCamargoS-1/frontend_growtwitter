import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, ul {
        list-style: none;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        color: #333;
        background-color: transparent;
    }
`;

export default GlobalStyled;
