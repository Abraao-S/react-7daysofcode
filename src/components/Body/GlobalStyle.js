import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './ResetCSS';
import bodyShapeImg from './../../assets/images/body-shape.svg';
import backgroundImg from './../../assets/images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    ${ResetCSS};
    
    body {
        font-family: 'Montserrat', sans-serif;
    }
    @media(min-width: 920px) {
        body {
            // border: 2px solid red;
            
            background-image: url(${bodyShapeImg}), url(${backgroundImg});
            
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