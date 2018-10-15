import React, { Component } from 'react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import SectionTitle from '../../components/mypage/section_title';

class Mypage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <SectionTitle title="MYページ" />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Mypage;