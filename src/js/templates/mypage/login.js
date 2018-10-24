import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';
import { Link } from 'react-router-dom';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

function LoginForm() {
  return (
    <div className="login-wrapper">
      <h3 className="mypage-h3">登録がお済みのお客様</h3>
      <p className="mypage-text">メールアドレスとパスワードを入力してログインしてください。</p>
      <Form className="login-form">
        <span className="login-panel-text">>>&nbsp;メールアドレス&nbsp;:</span><Input className="input-long" size="mini" name="mail" /><br />
        <span className="login-panel-text">>>&nbsp;パスワード&nbsp;:</span><Input className="input-long" size="mini" name="password" />
        <div className="button-wrapper">
          <Link to="/error"><Button className="login-button" nativeType="submit" size="small">ログイン</Button></Link>
        </div>
      </Form>
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
      <div className="button-panel">
        <Link to="/entry"><Button className="entry-button" size="small">会員登録する</Button></Link>
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
            <SectionTitle title="マイページ(ログイン)" />
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