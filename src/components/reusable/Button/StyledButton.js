import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(Link)`
    background: ${({hasBackground}) => (hasBackground ? '#B8E8D1' : 'transparent')};
    box-shadow: 0px 10px 16px rgba(192, 220, 207, 0.25);
    border-radius: 10px;
    width: 188px;
    height: 52px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 139.34%;
    outline: none;
    display: grid;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #32463D;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#B8E8D1' : '#01BF71' )};
    }
`;
