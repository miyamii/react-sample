import React, { Component } from 'react';
import { Form, Radio, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';

class AddressTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <tr className="address-manipulation">
        <td><Radio value={this.props.value} checked={this.state.value === this.props.value} onChange={this.onChange.bind(this)} name="choice" /></td>
        <td>お届け先住所</td>
        <td>〒〇〇〇-〇〇〇〇<br />住所が入ります。<br />〇〇&nbsp;〇〇様</td>
        <td><a className="mypage-text-link" href="javascript:void(0);" onClick="return false;">変更</a></td>
        <td><a className="mypage-text-link" href="javascript:void(0);" onClick="return false;">削除</a></td>
      </tr>
    );
  }
}

function AddressTable() {
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
        <AddressTableRow />
      </table>
    </form>
  );
}

class Address extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="mypage-list">
            <img src="https://placehold.jp/700x80.png" alt="お届け先の指定"/>
            <SectionTitle title="お届け先の指定" />
            <p className="mypage-text">テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト
            <span className="attention">※テキストテキストテキスト</span></p>
            <Button className="normal-button"size="small">新しいお届け先を追加する</Button>
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Address;