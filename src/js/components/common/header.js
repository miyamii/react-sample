
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import logo from '../img/logo.png';
import '../../../css/style.css';

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
      <div className="icon"><Link to="/cart"><i className="fas fa-cart-plus fa-2x"></i></Link></div>
      <div className="icon"><Link to="/mypage"><i className="fas fa-user fa-2x"></i></Link></div>
  </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <HeaderNav />
      </header>
    );
  }
}

export default Header;