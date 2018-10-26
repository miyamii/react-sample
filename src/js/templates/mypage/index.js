import React, { Component } from 'react';
import { Form, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';
import UserTable from '../../components/mypage/user_table';

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
        <div className="refusal-panel">
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
      <div className="refusal-panel">
        <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <Button className="submit-button" size="small">いいえ、削除しません。</Button>
        <Button className="delete-button" size="small">はい、削除します。</Button>
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
    <Form className="form-input" action="#" method="post">
      <UserTable />
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
        <Header isLogin={true} />
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