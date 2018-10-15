import React, { Component } from 'react';
import Header from '../components/mypage/header';
import Footer from '../components/mypage/footer';
import SectionTitle from '../components/mypage/section_title';

class Order extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <ul className="mypage-list">
            <li className="mypage-list-item">
              <SectionTitle title="特定商取引に関する法律に基づく表記"/>
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
                <td>info@sample.co.jp</td>
              </tr>
              <tr>
                <td>URL</td>
                <td>https://sample.com</td>
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
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Order;