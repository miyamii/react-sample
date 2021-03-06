import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function FooterNav() {
  return (
    <div>
      <ul className="footer-nav">
        <li className="nav-item"><Link to="/privacy" className="mypage-text-link">個人情報保護方針</Link></li>
        <li className="nav-item"><Link to="/contact" className="mypage-text-link">お問い合わせ</Link></li>
        <li className="nav-item"><Link to="/notice" className="mypage-text-link">注意事項</Link></li>
        <li className="nav-item"><Link to="/order" className="mypage-text-link">特定商取引法表示</Link></li>
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

class MypageFooter extends React.Component {
  render() {
    return (
      <footer className="mypage-footer">
        <FooterNav />
        <Copyright />
      </footer>
    );
  }
}
export default MypageFooter;