import { Container } from "../../../GlobalStyles";
import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #333333;
    margin-left: 30px;
    margin-right: 30px;
    z-index: 10;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    /* justify-content: space-between; */
    height: 84px;
    ${ Container }
`;

export const HeaderLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

export const HeaderIcon = styled.img`
    width: 125px;
    height: 125px;
`;

export const HeaderIconText = styled.img`
    width: 220px;
    height: 125px;
`;

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 117px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const HeaderLink = styled(Link)`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #333333;
    cursor: pointer;
    text-decoration: none;
    margin-right: 71px;
    
    background-image: linear-gradient(
        to right,
        #333333,
        #333333 100%
    );

    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;

    &:before{
    content: '';
    background: #22818b;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
    }

    &:hover {
        background-position: 0;
    }

    &:hover::before{
        width: 100%;
    }

    &.active {
        &::before {
            width: 100%;
            content: '';
            background: #22818b;
            display: block;
            position: absolute;
            bottom: -3px;
            left: 0;
            height: 3px;
        }
        /* border-bottom: 3px solid #B8E8D1; */
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #333333;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const HeaderButtons = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;