import React, { Component } from 'react';
import { Button } from 'element-react';
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
        <Header />
        <div className="container">
          <div className="mypage-list">
            <ErrorPanel errorMesage="メールアドレスもしくはパスワードが正しくありません。" />
            <Button className="back-button" size="small">戻る</Button>
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Error;