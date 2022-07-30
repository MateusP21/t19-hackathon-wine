import React from 'react';
import { HeaderContainer, HeaderIcons, HeaderNav } from './styles';
import logo from '../../images/wine.svg';
import lupa from '../../images/lupa.svg';
import avatar from '../../images/avatar.svg';
import sacola from '../../images/sacola.svg';

const Header = () => (
  <HeaderContainer>
    <a href="http://wine.com.br">
      {' '}
      <img src={ logo } alt="" />
    </a>
    <HeaderNav>
      <ul>
        <li>Home</li>
        <li>Clube</li>
        <li>Loja</li>
        <li>Produtores</li>
        <li>Ofertas</li>
        <li>Eventos</li>
      </ul>
    </HeaderNav>
    <HeaderIcons>
      <img height="40px" src={ lupa } alt="" />
      <img height="40px" src={ avatar } alt="" />
      <img height="40px" src={ sacola } alt="" />
    </HeaderIcons>
  </HeaderContainer>
);

export default Header;