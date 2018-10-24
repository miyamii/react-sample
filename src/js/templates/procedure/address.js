import React, { Component } from 'react';
import { Form, Radio, Button } from 'element-react';
import { Link } from 'react-router-dom';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import ProcedureHeader from '../../components/mypage/procedure_header';

class AddressTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <tr>
        <td><input id="delivery-address1" type="radio" name="delivery-address1" value={this.props.value} /></td>
        <td>{this.props.value === 1 ? "登録住所" : "追加お届け先"}</td>
        <td>住所が入ります。<br />〇〇&nbsp;〇〇</td>
        <td>{this.props.value === 1 ? "-" : <a className="mypage-text-link" href="javascript:void(0);" onClick="return false;">変更</a>}</td>
        <td>{this.props.value === 1 ? "-" : <a className="mypage-text-link" href="javascript:void(0);" onClick="return false;">削除</a>}</td>
      </tr>
    );
  }
}

function AddressForm() {
  return (
    <form action="#" method="post">
      <table className="address-table" rules="all">
        <tr>
          <th>選択</th>
          <th>住所種類</th>
          <th>お届け先</th>
          <th>変更</th>
          <th>削除</th>
        </tr>
        <AddressTableRow value={1} />
        <AddressTableRow value={2} />
        <AddressTableRow value={3} />
      </table>
      <div className="button-wrapper">
        <Link to="/cart"><Button className="back-button" size="small" nativeType="button">戻る</Button></Link>
        <Link to="/procedure/payment"><Button className="submit-button" size="small" nativeType="submit">選択したお届け先に送る</Button></Link>
      </div>
    </form>
  );
}

class ProcedureAddress extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="address mypage-list">
          <ProcedureHeader title="お届け先の指定" alt="お届け先の指定"/>
            <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト<br />
            <span className="attention">※テキストテキストテキスト</span></p>
            <Button className="add-address-button"size="small">新しいお届け先を追加する</Button>
            <AddressForm />
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default ProcedureAddress;