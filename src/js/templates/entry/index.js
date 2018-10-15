import React, { Component } from 'react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import SectionTitle from '../../components/mypage/section_title';

class Entry extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <SectionTitle title="会員登録" />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Entry;