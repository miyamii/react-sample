import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCartPlus, faUser);

function Logo(){
  const logoUrl = new URL('https://placehold.jp/130x50.png?text=logo');
  const logoAlt = 'ロゴ';
  return (
    <div className="logo">
      <h1><Link to="/"><img src={logoUrl} alt={logoAlt} /></Link></h1>
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="nav">
      <div className="icon"><Link to="/cart"><FontAwesomeIcon icon="cart-plus" size="2x"/></Link></div>
      <div className="icon"><Link to="/mypage"><FontAwesomeIcon icon="user" size="2x"/></Link></div>
  </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <header className="common-header">
        <Logo />
        <HeaderNav />
      </header>
    );
  }
}

export default Header;