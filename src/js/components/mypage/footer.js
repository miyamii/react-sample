import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../css/style.css';
import Footer from '../../components/common/footer';

class MypageFooter extends React.Component {
  render() {
    return (
      <footer className="mypage-footer">
        <Footer />
      </footer>
    );
  }
}
export default MypageFooter;