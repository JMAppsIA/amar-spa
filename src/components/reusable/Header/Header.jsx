import React from 'react'
import { Nav, HeaderContainer, HeaderLogo, HeaderIcon, HeaderLink, HeaderButtons, HeaderMenu, Bars, HeaderIconText } from './HeaderElements'
import logo from '../../../assets/logo-only.png';
import Button from '../Button/Button';

function Header() {
  return (
    <>
      <Nav>
        <HeaderContainer>
          <HeaderLogo to='/'>
            <HeaderIcon src={logo}/>
          </HeaderLogo>
          <Bars/>
          <HeaderMenu>
            <HeaderLink to='/' activeStyle>{`Inicio`}</HeaderLink>
            <HeaderLink to='/servicios' activeStyle>{`Servicios`}</HeaderLink>
            <HeaderLink to='/resultados' activeStyle>{`Resultados`}</HeaderLink>
            <HeaderLink to='/sobre-nosotros' activeStyle>{`Quienes somos`}</HeaderLink>
            <HeaderLink to='/reservas' activeStyle>{`Reservas`}</HeaderLink>
          </HeaderMenu>
        </HeaderContainer>
        <HeaderButtons>
          <Button
            to={'/sign-in'}
            text={`Ingresar`}
          />
        </HeaderButtons>
      </Nav>
    </>
  )
}

export default Header