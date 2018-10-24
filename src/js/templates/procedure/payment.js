import React, { Component } from 'react';
import { Form, Radio, Button } from 'element-react';
import { Link } from 'react-router-dom';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import ProcedureHeader from '../../components/mypage/procedure_header';

class PaymentTableRow extends React.Component {
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
        <td><input id="payment-method" type="radio" name="paymentMethod" value={this.props.value} /></td>
        <td>{this.props.paymentMethod}</td>
      </tr>
    );
  }
}

function PaymentForm() {
  return (
    <form action="#" method="post">
      <table className="payment-table" rules="all">
        <tr>
          <th>選択</th>
          <th>お支払い方法</th>
        </tr>
        <PaymentTableRow value={1} paymentMethod="クレジットカード決済" />
        <PaymentTableRow value={2} paymentMethod="ドコモケータイ払い"/>
        <PaymentTableRow value={3} paymentMethod="auかんたん決済"/>
        <PaymentTableRow value={4} paymentMethod="ソフトバンクまとめて支払い"/>
        <PaymentTableRow value={5} paymentMethod="WebMoney決済"/>
      </table>
      <div className="button-wrapper">
        <Link to="/procedure/address"><Button className="back-button" size="small" nativeType="button">戻る</Button></Link>
        <Link to="/procedure/confirm"><Button className="submit-button" size="small" nativeType="submit">ご注文内容の確認</Button></Link>
      </div>
    </form>
  );
}

class ProcedurePayment extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="payment mypage-list">
            <ProcedureHeader title="お支払い方法の指定" alt="お支払い方法の指定" />
            <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト<br /></p>
            <PaymentForm />
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default ProcedurePayment;