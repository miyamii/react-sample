import React, { Component } from 'react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

function ContactConfirmTable() {
  return (
    <table className="mypage-table" rules="all">
      <tr>
        <td>販売業者</td>
        <td>株式会社〇〇〇〇</td>
      </tr>
      <tr>
        <td>運営責任者</td>
        <td>〇〇〇〇</td>
      </tr>
      <tr>
        <td>住所</td>
        <td>
           〒〇〇〇-〇〇〇<br />
           福岡県福岡市〇〇区〇〇町
        </td>
      </tr>
      <tr>
        <td>電話番号</td>
        <td>〇〇〇-〇〇〇-〇〇〇〇</td>
      </tr>
      <tr>
        <td>メールアドレス</td>
        <td><a href="#" className="mypage-text-link">info@sample.co.jp</a></td>
      </tr>
      <tr>
        <td>URL</td>
        <td><a href="#" className="mypage-text-link">https://sample.com</a></td>
      </tr>
      <tr>
        <td>備考1</td>
        <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
      </tr>
      <tr>
        <td>備考2</td>
        <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
      </tr>
      <tr>
        <td>備考3</td>
        <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
      </tr>
      <tr>
        <td>備考4</td>
        <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
      </tr>
    </table>
  );
}

class ContactConfirm extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <ul className="mypage-list">
            <li className="mypage-list-item">
              <SectionTitle title="お問い合わせ内容確認"/>
              <ContactConfirmTable />
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