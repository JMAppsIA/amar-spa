import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
margin-right: auto;
margin-left: auto;
padding-left: 30px;
padding-right: 30px;

@media screen and (max-width: 991px) {
    padding-left: 18px;
    padding-right: 18px;
}
`;