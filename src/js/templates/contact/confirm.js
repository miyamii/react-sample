import React, { Component } from 'react';
import { Form, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

function ContactConfirmForm(props) {
  return (
    <Form className="form-confirm contact-confirm" action="#" method="post">
      <p className="mypage-text">テキストが入ります。</p>
      <table className="mypage-table" rules="all">
        <tr>
          <td>お名前</td>
          <td>{props.familyName + props.givenName}</td>
        </tr>
        <tr>
          <td>お名前(フリガナ)</td>
          <td>{props.familyNameKana + props.givenNameKana}</td>
        </tr>
        <tr>
          <td>郵便番号</td>
          <td>{"〒" + props.postalCode1 + "-" + props.postalCode2}</td>
        </tr>
        <tr>
          <td>住所</td>
          <td>{props.address1 + props.address2 + props.address3}</td>
        </tr>
        <tr>
          <td>電話番号</td>
          <td>{props.tel1 + "-" + props.tel2 + "-" + props.tel3}</td>
        </tr>
        <tr>
          <td>メールアドレス</td>
          <td>{props.mail}</td>
        </tr>
        <tr>
          <td>お問い合わせ種別</td>
          <td>{props.kind}</td>
        </tr>
        <tr>
          <td>ご注文番号</td>
          <td>{props.orderNumber}</td>
        </tr>
        <tr>
          <td>お問い合わせ内容</td>
          <td>{props.content}</td>
        </tr>
      </table>
      <div className="button-wrapper">
        <Button className="back-button" size="small" nativeType="button">戻る</Button>
        <Button className="submit-button" size="small" nativeType="submit">送信</Button>
      </div>
    </Form>
  );
}

class ContactConfirm extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header isLogin={true} />
        <div className="container">
          <ul className="mypage-list">
            <li className="mypage-list-item">
              <SectionTitle title="お問い合わせ内容確認"/>
              <ContactConfirmForm mail="sample@info.com"/>
            </li>
          </ul>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default ContactConfirm;