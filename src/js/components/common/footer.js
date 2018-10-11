import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import '../../../css/style.css';

function FooterNav() {
  return (
    <div>
      <ul className="footer-nav">
        <li className="nav-item"><Link to="/privacy">個人情報保護方針</Link></li>
        <li className="nav-item"><Link to="/contact">お問い合わせ</Link></li>
        <li className="nav-item"><Link to="/notice">注意事項</Link></li>
        <li className="nav-item"><Link to="/order">特定商取引法表示</Link></li>
      </ul>
    </div>
  );
}

function Copyright() {
  return (
    <div>
      <p className="copyright">Copyright © 2018 sample All rights reserved.</p>
    </div>
  );
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <FooterNav />
        <Copyright />
      </footer>
    );
  }
}

export default Footer;