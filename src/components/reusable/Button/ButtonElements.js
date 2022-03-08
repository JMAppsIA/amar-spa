import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledButton = styled(Link)`
    box-shadow: 0px 10px 16px rgba(192, 220, 207, 0.25);
    border-radius: 10px;
    border: .5px solid #22818b;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 150px;
    height: 52px;
    font-weight: normal;
    font-size: 16px;
    line-height: 139.34%;
    display: grid;
    align-items: center;
    text-align: center;
    color: #333333;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #22818b;
        color: #333333;
    }
`;