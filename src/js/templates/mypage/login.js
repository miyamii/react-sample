import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

function LoginForm() {
  return (
    // className考える
    <div className="login-wrapper">
      <h3 className="mypage-h3">登録がお済みのお客様</h3>
      <p className="mypage-text">メールアドレスとパスワードを入力してログインしてください。</p>
      <form className="login-form">
        <span className="mypage-text">>>&nbsp;メールアドレス&nbsp;:</span><Input className="input-middle" size="mini" name="mail" /><br />
        <span className="mypage-text">>>&nbsp;パスワード&nbsp;:</span><Input className="input-middle" size="mini" name="password" />
        <div className="button-wrapper">
          <Button className="login-button" size="small">ログイン</Button>
        </div>
      </form>
      <p className="mypage-text">パスワードを忘れた方は<a href="#" className="mypage-text-link">こちら</a>からパスワードの再発行を行なってください。<br />
      メールアドレスを忘れた方は<a href="#" className="mypage-text-link">こちら</a>からお問い合わせください。</p>
    </div>
  );
}

function Guidance() {
  return (
    <div className="guidance-wrapper">
      <h3 className="mypage-h3">登録されていないお客様</h3>
      <p className="mypage-text">会員登録するとマイページを利用できます。<br />また、ログインするだけでお買い物時の情報入力が不要になります。</p>
      <div className="button-area">
        <Button className="entry-button" size="small">会員登録する</Button>
      </div>
    </div>
  );
}

class Login extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="mypage-list">
            <SectionTitle title="MYページ(ログイン)" />
            <LoginForm />
            <Guidance />
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Login;