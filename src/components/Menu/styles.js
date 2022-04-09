import styled from 'styled-components';

export const Header = styled.header`
    // border: 1px solid red;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 16px;
    flex-wrap: wrap;
    flex-direction: column;

    @media(min-width: 920px) {
            // border: 1px solid red;
            flex-direction: row;
            padding: 0;
            padding-left: 16px;
        }

    nav {
        /* border: 1px solid red; */
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        
        @media(min-width: 920px) {
            // border: 1px solid red;
            justify-content: flex-end;
        }
    }
    
    li {
        list-style: none;
        font-size: 12px;
        
        @media(min-width: 920px) {
                // border: 1px solid red;
                font-size: 16px;
            }
    }

    li a {
        // border: 1px solid red;
        display: inline-block;
        font-weight: 400;
        font-size: inherit;
        line-height: 1.1;
        text-decoration: none;
        color: #202020;
        padding: 8px;

        @media(min-width: 920px) {
            padding: 16px;
        }
    }
`