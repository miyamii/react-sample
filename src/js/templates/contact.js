import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css';
import Header from '../components/mypage/header';
import Footer from '../components/mypage/footer';

function ContactForm() {
  return (
    <form action="#" method="post">
      <p>テキストが入ります。</p>
      <table>
        <tr>
          <td>お名前<span className="required">※</span></td>
          <td>
            姓<input type="text" name="family-name"/>
            名<input type="text" name="given-name"/>
          </td>
        </tr>
        <tr>
          <td>お名前(フリガナ)<span className="required">※</span></td>
          <td>
            セイ<input type="text" name="family-name-kana"/>
            メイ<input type="text" name="given-name-kana"/>
          </td>
        </tr>
        <tr>
          <td>郵便番号</td>
          <td>
            〒 <input type="text" name="postal-code1"/>
            - <input type="text" name="postal-code2"/>
          </td>
        </tr>
        <tr>
          <td>住所</td>
          <td>
            <input type="text" name="city-name"/><br />
            市区町村名 (例：〇〇市〇〇町)<br />
            メイ<input type="text" name="first-name"/><br />
            番地・ビル名 (例：1-2-3)<br />
            <span>赤字テキスト</span>
          </td>
        </tr>
        <tr>
          <td>電話番号</td>
          <td>
            <input type="number" name="tel-1"/>
            -<input type="number" name="tel-2"/>
            -<input type="number" name="tel-3"/>
          </td>
        </tr>
        <tr>
          <td>メールアドレス<span className="required">※</span></td>
          <td>
            <input type="mail" name="mail1"/><br />
            <input type="mail" name="mail2"/><br />
            <span>赤字テキスト</span>
          </td>
        </tr>
        <tr>
          <td>お問い合わせ種別<span className="required">※</span></td>
          <td>
            <select name="tel-1">
            <option value="その1">その1</option>
            <option value="その2">その2</option>
            <option value="その3">その3</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>ご注文番号</td>
          <td>
            <input type="number" name="order-number"/>
          </td>
        </tr>
      </table>
    </form>
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