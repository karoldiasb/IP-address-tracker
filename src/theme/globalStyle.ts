import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // [NextJS Reset]
    html {
        display: flex;
        min-height: 100%;
        flex-direction: column;
    }
    body {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    #__next {
        width: 100%;
       
    }
    // [Reset Styles]
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
