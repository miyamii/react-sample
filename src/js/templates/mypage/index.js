import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

function Tab() {
  return (
    <div className="tab">
      <input id="history" type="radio" name="tab-item" />
      <label className="tab-item" for="history">購入履歴一覧</label>
    </div>
  );
}

function Tabs() {
  return (
    <div className="tabs">
      <input id="history" type="radio" name="tab-item" />
      <label className="tab-item" for="history">購入履歴一覧</label>
      <input id="change" type="radio" name="tab-item" />
      <label className="tab-item" for="change">会員情報変更</label>
      <input id="delivery" type="radio" name="tab-item" />
      <label className="tab-item" for="delivery">お届け先追加・編集</label>
      <input id="refusal" type="radio" name="tab-item" />
      <label className="tab-item" for="refusal">会員情報削除</label>
      <input id="change-card" type="radio" name="tab-item" />
      <label className="tab-item" for="change-card">カード情報編集</label>
      <History />
      <Change />
      <Delivery />
      <Refusal />
      <ChangeCard />
    </div>
  );
}

function History() {
  return (
    <div className="tab-content history-content">
      <div className="mypage-container">
        <h3 className="mypage-h3">購入履歴一覧</h3>
        <p className="mypage-text">購入履歴はありません。</p>
      </div>
    </div>
  );
}

function Change() {
  return (
    <div className="tab-content change-content">
      <div className="mypage-container">
        <h3 className="mypage-h3">会員情報変更</h3>
        <p className="mypage-text">下記項目を入力してください。<br />入力後、変更内容の確認ボタンを押すと確認画面に移動します。</p>
        <ChangeForm />
      </div>
    </div>
  );
}

function Delivery(props) {
  return (
    <div className="tab-content delivery-content">
      <div className="mypage-container">
        <h3 className="mypage-h3">お届け先追加・削除</h3>
        <p className="mypage-text">テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
        <span className="attention">※ テキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></p>
        <Button className="normal-button"size="small">新しいお届け先を追加する</Button>
        {props.deliveryIndex === 0 ? <p className="mypage-text"><b>新しいお届け先はありません。</b></p> : <DeliveryTable />}
      </div>
    </div>
  );
}

function DeliveryTable() {
  return (
    <form action="/" method="">
      <table className="delivery-table" rules="all">
        <tr>
          <th colspan="5">お届け先</th>
        </tr>
        <DeliveryTableRow />
      </table>
    </form>
  );
}

function DeliveryTableRow() {
  return (
    <tr className="cart-product-manipulation">
      <td>1</td>
      <td>お届け先住所</td>
      <td>〒〇〇〇-〇〇〇〇<br />住所が入ります。</td>
      <td><a className="mypage-text-link" href="javascript:void(0);" onClick="return false;">変更</a></td>
      <td><a className="mypage-text-link" href="javascript:void(0);" onClick="return false;">削除</a></td>
    </tr>
  );
}

function Refusal() {
  return (
    <div className="tab-content refusal-content">
      <div className="mypage-container">
        <h3 className="mypage-h3">会員情報削除</h3>
        <p className="">テキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <div className="refusal-card">
          <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <Button className="submit-button" size="small">手続きを進める</Button>
        </div>
      </div>
    </div>
  );
}

function RefusalConfirmContent() {
  return (
    <div className="mypage-container">
      <h3 className="mypage-h3">会員情報削除(確認)</h3>
      <p className="">テキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <div className="refusal-card">
        <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <Button className="submit-button" size="small">いいえ、削除しません。</Button>
        <Button className="negative-button" size="small">はい、削除します。</Button>
      </div>
    </div>
  );
}

function ChangeCard() {
  return (
    <div className="tab-content change-card-content">
      <div className="mypage-container">

        <h3 className="mypage-h3">現在登録されているカード情報</h3>
        <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <Button className="mini-button" size="mini" nativeType="submit">情報を削除</Button>

        <h3 className="mypage-h3">新規カード情報登録</h3>
       <form>
        <table　className="card-">

        </table>
        </form>
        <Button className="mini-button" size="mini" nativeType="submit">カード情報を登録</Button>
      </div>
    </div>
  );
}

function ChangeForm() {
  return (
    <Form className="contact-form" action="#" method="post">
      <table className="mypage-table" rules="all">
        <tr>
          <td>お名前<span className="required">※</span></td>
          <td>
            姓&nbsp;<Input className="input-middle" minLength="1" size="mini" name="family-name"/>
            &nbsp;名&nbsp;<Input className="input-middle" minLength="1" size="mini" name="given-name"/>
          </td>
        </tr>
        <tr>
          <td>お名前(フリガナ)<span className="required">※</span></td>
          <td>
            セイ&nbsp;<Input className="input-middle" size="mini" name="family-name-kana"/>
            &nbsp;メイ&nbsp;<Input className="input-middle" size="mini" name="given-name-kana"/>
          </td>
        </tr>
        <tr>
          <td>会社名<span className="required">※</span></td>
          <td>
            <Input className="input-long" size="mini" name="company-name"/>
          </td>
        </tr>
        <tr>
          <td>郵便番号</td>
          <td>
            〒&nbsp;<Input className="input-short" size="mini" name="postal-code1"/>
            &nbsp;-&nbsp;<Input className="input-short" size="mini" name="postal-code2"/><br />
            <Button className="normal-button"size="small">自動住所入力</Button>
            <p className="text">テキストテキストテキスト</p>
          </td>
        </tr>
        <tr>
          <td>住所</td>
          <td>
            <Select className="select" name="address1" placeholder="都道府県を選択" size="mini">
              <Select.Option value="北海道">北海道</Select.Option>
              <Select.Option value="東京都">東京都</Select.Option>
              <Select.Option value="福岡県">福岡県</Select.Option>
            </Select><br />
            <Input className="input-long" size="mini" name="address2"/><br />
            市区町村名 (例：〇〇市〇〇町)<br />
            <Input className="input-long" size="mini" name="address3"/><br />
            番地・ビル名 (例：1-2-3)<br />
            <p className="attention">赤字テキスト赤字テキスト</p>
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
            <p  className="attention">赤字テキスト赤字テキスト</p>
          </td>
        </tr>
      </table>
      <div className="button-wrapper">
        <Button className="submit-button" size="small" nativeType="submit">変更内容の確認</Button>
      </div>
    </Form>
  );
}

class Mypage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="mypage-list">
            <SectionTitle title="マイページ" />
            <Tabs />
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Mypage;