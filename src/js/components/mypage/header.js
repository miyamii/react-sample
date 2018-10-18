import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'element-react';
// import logo from '../img/logo.png';

function Logo(){
  const logoUrl = new URL('https://placehold.jp/150x70.png?text=logo');
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
      <form action="/" method="post">
        <div className="login-area">
        </div>
        {/* ログイン時と非ログイン時でボタンの数が変わる */}
        <div className="button-area">
          <Link to="/mypage"><Button size="small" className="mypage-button"><i className="fas fa-user fa-lg fa-fw" />マイページ</Button></Link>
          <Link to="/entry"><Button size="small" className="orange-button"><i className="fas fa-edit fa-lg fa-fw" />会員登録</Button></Link>
          <Link to="/cart"><Button size="small" className="orange-button"><i className="fas fa-cart-plus fa-lg fa-fw" />カートの中を見る</Button></Link>
        </div>
      </form>
    </div>
  );
}

class MypageHeader extends React.Component {
  render() {
    return (
      <header className="mypage-header">
        <div className="mypage-header-inner">
          <Logo />
          <HeaderNav />
        </div>
      </header>
    );
  }
}

export default MypageHeader;