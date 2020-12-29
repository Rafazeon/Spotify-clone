import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
    }

    body, input, button {
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-size: 16px;
    }

    body::-webkit-scrollbar {
        width: 5px;
    }

    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    body::-webkit-scrollbar-thumb {
        background-color: #000;
        outline: 1px solid slategrey;
    }

    h1, h2, h3, h4, h5, h6, p, li, strong {
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
    }

    h1, h2 {
        color: #233D63;
    }

    h3, a {
        color: #fff;
    }

    p {
        color: #8796AC;
    }

    button {
        cursor: pointer;
        border: 0;
        background: transparent;
    }

    // Remove o padding da classe do materialUi do Accordion Collapse
    .fmAVrR div > div {
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }

    .iHaOcn div > div {
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }
`;
