import React, { Component } from 'react';
import { Form, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';

function ErrorArea(props) {
  return (
    <div className="error-message">
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
            <ErrorArea errorMesage="メールアドレスもしくはパスワードが正しくありません。" />
            <Button className="negative-button" size="small">戻る</Button>
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Error;