import React, { Component } from 'react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

function EntryConfirmTable() {
  return (
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
          <td>会社名</td>
          <td>{props.familyNameKana + props.companyName}</td>
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
          <td>性別</td>
          <td>{props.sex}</td>
        </tr>
        <tr>
          <td>生年月日</td>
          <td>{props.year + "年" + props.month + "月" + props.day + "日"}</td>
        </tr>
        <tr>
          <td>希望するパスワード</td>
          <td>{props.password}</td>
        </tr>
        <tr>
          <td>パスワードを忘れた時のヒント</td>
          <td>
            質問&nbsp;:&nbsp;{props.hint1}<br />
            答え&nbsp;:&nbsp;{props.hint2}
          </td>
        </tr>
      <div className="button-wrapper">
        <Button className="back-button" size="small" nativeType="button">戻る</Button>
        <Button className="submit-button" size="small" nativeType="submit">送信</Button>
      </div>
    </table>
  );
}

class EntryConfirm extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <ul className="mypage-list">
            <li className="mypage-list-item">
              <SectionTitle title="会員登録内容確認"/>
              <EntryConfirmTable />
            </li>
          </ul>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default EntryConfirm;