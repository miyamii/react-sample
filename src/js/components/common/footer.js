import React, { Component } from 'react';
import '../../../css/style.css';

function FooterNav() {
  return (
    <div>
      <ul className="footer-nav">
        <li className="nav-item"><a href="#">個人情報保護方針</a></li>
        <li className="nav-item"><a href="#">お問い合わせ</a></li>
        <li className="nav-item"><a href="#">注意事項</a></li>
        <li className="nav-item"><a href="#">特定商取引法表示</a></li>
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