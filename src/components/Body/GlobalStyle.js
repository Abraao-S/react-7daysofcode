import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './ResetCSS';

export const GlobalStyle = createGlobalStyle`
    ${ResetCSS};
    
    // * {
    //     border: 2px solid red;
    // }

    body {
        font-family: 'Montserrat', sans-serif;    
    }
    @media(min-width: 920px) {
        body {
            // border: 5px solid red;
            background-image: url('./../../assets/images/body-shape.svg'), url('./../../assets/images/bg.jpg');
            background-repeat: no-repeat,  repeat-x;
            background-position: right top;
        }
    }
    
    main {
        // border: 1px solid red;
        max-width: 1200px;
        // max-width: 1600px;
        margin: auto;
    }
`;