import React, { Component } from 'react';
import '../../css/style.css';
import Header from '../components/mypage/header';
import Footer from '../components/mypage/footer';
import { Form, Input, Select, Button } from 'element-react';

function ContactForm() {
  return (
    <Form className="contact-form" action="#" method="post">
      <p className="text">テキストが入ります。</p>
      <table>
        <tr>
          <td>お名前<span className="required">※</span></td>
          <td>
            姓&nbsp;<Input className="input-middle" minLength="1" size="mini" name="family-name"/>
            &nbsp;&nbsp;名&nbsp;<Input className="input-middle" minLength="1" size="mini" name="given-name"/>
          </td>
        </tr>
        <tr>
          <td>お名前(フリガナ)<span className="required">※</span></td>
          <td>
            セイ&nbsp;<Input className="input-middle" size="mini" name="family-name-kana"/>
            &nbsp;&nbsp;メイ&nbsp;<Input className="input-middle" size="mini" name="given-name-kana"/>
          </td>
        </tr>
        <tr>
          <td>郵便番号</td>
          <td>
            〒&nbsp;<Input className="input-short" size="mini" name="postal-code1"/>
            &nbsp;-&nbsp;<Input className="input-short" size="mini" name="postal-code2"/><br />
            <Button className="button-middle">自動住所入力</Button><br />
            <p className="attention">赤字テキスト</p>
          </td>
        </tr>
        <tr>
          <td>住所</td>
          <td>
            <Select className="select" name="address1" placeholder="種別を選択してください。" size="mini">
              <Select.Option value="北海道">北海道</Select.Option>
              <Select.Option value="東京都">東京都</Select.Option>
              <Select.Option value="福岡県">福岡県</Select.Option>
            </Select><br />
            <Input className="input-long" size="mini" name="address2"/><br />
            市区町村名 (例：〇〇市〇〇町)<br />
            <Input className="input-long" size="mini" name="address3"/><br />
            番地・ビル名 (例：1-2-3)<br />
            <p className="attention">赤字テキスト</p>
          </td>
        </tr>
        <tr>
          <td>電話番号</td>
          <td>
            <Input className="input-short" size="mini" name="tel1"/>
            &nbsp;-&nbsp;<Input className="input-short" size="mini" name="tel2"/>
            &nbsp;-&nbsp;<Input className="input-short" size="mini" name="tel3"/>
          </td>
        </tr>
        <tr>
          <td>メールアドレス<span className="required">※</span></td>
          <td>
            <Input className="input-long" size="mini" type="mail" name="mail1"/><br />
            <Input className="input-long" size="mini" type="mail" name="mail2"/><br />
            <p  className="attention">赤字テキスト</p>
          </td>
        </tr>
        <tr>
          <td>お問い合わせ種別<span className="required">※</span></td>
          <td>
            <Select className="select" name="kind" placeholder="種別を選択してください。" size="mini">
              <Select.Option value="その1">その1</Select.Option>
              <Select.Option value="その2">その2</Select.Option>
              <Select.Option value="その3">その3</Select.Option>
            </Select>
          </td>
        </tr>
        <tr>
          <td>ご注文番号</td>
          <td>
            <Input type="number" size="mini" name="order-number"/>
          </td>
        </tr>
        <tr>
          <td>お問い合わせ内容<span className="required">※</span></td>
          <td>
            <Input type="textarea" name="summary"/>
            <p className="attention">赤字テキスト</p>
          </td>
        </tr>
      </table>
      <div className="button-wrapper">
        <Button className="button-middle" type="primary" size="mini" nativeType="submit">確認ページへ</Button>
      </div>
    </Form>
  );
}

class Contact extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
        <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;