
import React, { Component } from 'react';
// import logo from '../img/logo.png';
import '../../../css/style.css';

function Logo(){
  const logoUrl = new URL('https://placehold.jp/130x50.png');
  const logoAlt = 'ロゴ';
  return (
    <div className="logo">
      <h1><a href="#"><img src={logoUrl} alt={logoAlt} /></a></h1>
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="nav">
      <div className="icon"><a href="#"><i className="fas fa-cart-plus fa-2x"></i></a></div>
      <div className="icon"><a href="#"><i className="fas fa-user fa-2x"></i></a></div>
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