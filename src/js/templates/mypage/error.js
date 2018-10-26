import React, { Component } from 'react';
import { Button } from 'element-react';
import { Link } from 'react-router-dom';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';

function ErrorPanel(props) {
  return (
    <div className="error-message-panel">
      <p className="mypage-text">{props.errorMessage}</p>
    </div>
  );
}

class Error extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header isLogin={true} />
        <div className="container">
          <div className="error mypage-list">
            <ErrorPanel errorMessage="メールアドレスもしくはパスワードが正しくありません。" />
            <Link to="/mypage/login"><Button className="back-button" size="small">戻る</Button></Link>
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Error;