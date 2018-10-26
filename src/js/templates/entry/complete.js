import React, { Component } from 'react';
import { Button } from 'element-react';
import { Link } from 'react-router-dom'
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

class EntryComplete extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header isLogin={true} />
        <div className="container">
          <ul className="mypage-list">
            <li className="mypage-list-item">
              <SectionTitle title="会員登録完了"/>
              <p className="mypage-text-bold">テキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト</p>
              <Link to="/"><Button className="submit-button" size="small" nativeType="submit">トップページへ</Button></Link>
            </li>
          </ul>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default EntryComplete;