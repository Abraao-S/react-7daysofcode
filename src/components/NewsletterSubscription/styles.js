import styled from 'styled-components';
import heroImg from './../../assets/images/hero-image.png';
import mailIcon from './../../assets/images/icon-mail.svg';

export const StyledNewsletterSubscription = styled.div`
    // *{border: 1px solid green;}
    background-color: #ffe29a;
    padding: 16px;
    margin-top: 16px;
    position: relative;

    @media(min-width: 920px) {
        // border: 2px solid green;
        background-color: transparent;
        margin-top: 155px;
    }

    &:after {
        /* border: 3px solid orange; */
        content: '';
        display: block;
        width: 787px;
        height: 975px;
        background-image: url(${heroImg});
        position: absolute;
        --baseDistance: -287px; /* variable */
        top: calc(var(--baseDistance) + 50px);
        right: 0;
        z-index: -1;
        pointer-events: none;
    }

    h1 {
        /* border: 3px solid brown; */
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 24px;
    }

    h1 strong {
        /* border: 3px solid brown; */
        font-family: Elsie Swash Caps;
        font-size: 50px;
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: 0em;
        text-align: left;
        
        @media(min-width: 920px) {
            font-size: 82px;
        }
    }

    p {
        // border: 3px solid brown;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 16px;
    }
`;

export const StyledNewsletterSubscriptionContainer = styled.div`
    // border: 2px solid brown;
    max-width: 585px;

    h1,
    strong,
    p {
        // border: 3px solid brown;
        max-width: 481;
        margin-bottom: 32px;
    }
`;

export const StyledNewsletterForm = styled.form`
    // border: 1px solid red;

    input[type="email"] {
        // border: 2px solid red;
        padding: 27px;
        padding-left: 55px;
    }    
`;

export const StyledNewsletterFormFieldGroup = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 585px;
    @media(min-width: 920px) {
        // border: 1px solid green;
        flex-direction: row;
    }
`;
    
export const StyledNewsletterFormInput = styled.input`     
    flex: 1;
    // padding: 10px;

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight:normal;

    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    background-image: url(${mailIcon});
    background-repeat: no-repeat;
    background-position: 16px center;

    outline-color: ffcb47;
    box-shadow: 10px 10px 30px 0px #0000000f;

    border: 0;

    &:hover {
    box-shadow: 10px 10px 30px 0px #0000002e;
    }
`;

export const StyledNewsletterSubscriptionButton = styled.button`
    // border: 1px solid red !important;

    font-size: 16px;
    padding: 27px;
    height: 75px;
    width: 194px;
    left: 751;
    top: 597;
    width: 100%;
    border-radius: 0px;
    border: 0;
    // box-shadow: 10px 10px 30px 0px #ffcb474d;

    color: #fff;
    
    // remember: opacity will be 0.5 when button is disabled
    background-color: #FFCB47;
    
    // makes the button clickable or not according to state
    pointer-events: ${ (props) => 
        props.$enabled ? "auto" : "none" }
    ;

    // changes opacity based on button state
    opacity: ${ (props) =>
        props.$enabled ? '1' : '0.5'
    };

    @media(min-width: 920px) {
    width: initial;
    }
`;