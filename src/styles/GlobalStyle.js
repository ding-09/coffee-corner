import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        height: 100%;
    }
    body {
        height: 100%;
        background: #FFFDFB;
        font-family: 'Red Hat Display', sans-serif;
        color: #52362F;
    }
    .big-title {
        font-weight: 700;
        font-size: 6.5rem;
        line-height: 8rem;
        letter-spacing: 4px;
    }
    h1 {
        font-weight: 500;
        font-size: 2.8rem;
        letter-spacing: 1px;
    }
    p {
        font-size: 1.6rem;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: #52362F;
        font-weight: 400;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }
    img {
        display: block;
        max-width: 100%;
    }
    .btn {
        background: #FFB52D;
        padding: 1.5rem 3.5rem;
        border-radius: 0.5rem;
        box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.5);
        font-weight: 500;
        font-size: 1.6rem;
        color: rgba(82,54,47,0.8);
        &:hover {
            background: #FAC86B;
        }
    }
`;

export default GlobalStyle;
