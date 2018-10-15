import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
// import logo from '../img/logo.png';
import '../../../css/style.css';

function Logo(){
  const logoUrl = new URL('https://placehold.jp/150x60.png?text=logo');
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
      
  </div>
  );
}

class MypageHeader extends React.Component {
  render() {
    return (
      <header className="mypage-header">
        <Logo />
        <HeaderNav />
      </header>
    );
  }
}

export default MypageHeader;