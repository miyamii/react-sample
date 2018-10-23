import React, { Component } from 'react';
import { Input, Select, Radio, Button } from 'element-react';

class UserTable extends React.Component {
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
          <td>会社名</td>
          <td>
            <Input className="input-long" size="mini" name="company-name"/>
          </td>
        </tr>
        <tr>
          <td>郵便番号<span className="required">※</span></td>
          <td>
            〒&nbsp;<Input className="input-short" size="mini" name="postal-code1"/>
            &nbsp;-&nbsp;<Input className="input-short" size="mini" name="postal-code2"/><br />
            <Button className="normal-button"size="small">自動住所入力</Button>
            <p className="text">テキストテキストテキスト</p>
          </td>
        </tr>
        <tr>
          <td>住所<span className="required">※</span></td>
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
          <td>電話番号<span className="required">※</span></td>
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
        <tr>
          <td>性別</td>
          <td>
          <Radio value="1" checked={this.state.value === 1} onChange={this.onChange.bind(this)} name="sex">男性</Radio><br />
          <Radio value="2" checked={this.state.value === 2} onChange={this.onChange.bind(this)} name="sex">女性</Radio>
          </td>
        </tr>
        <tr>
          <td>生年月日</td>
          <td>
            <Select className="select-number" name="year" placeholder="----" size="mini">
              <Select.Option value="1970">1970</Select.Option>
              <Select.Option value="1990">1990</Select.Option>
              <Select.Option value="2000">2000</Select.Option>
            </Select>&nbsp;年&nbsp;
            <Select className="select-number" name="month" placeholder="--" size="mini">
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="6">6</Select.Option>
              <Select.Option value="12">12</Select.Option>
            </Select>&nbsp;月&nbsp;
            <Select className="select-number" name="day" placeholder="--" size="mini">
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="30">30</Select.Option>
            </Select>&nbsp;日&nbsp;
          </td>
        </tr>
        <tr>
          <td>希望するパスワード<span className="required">※</span></td>
          <td>
            <Input className="input-middle" size="mini" type="password" name="password1"/><br />
            <p className="attention">赤字テキスト赤字テキスト</p>
            <Input className="input-middle" size="mini" type="password" name="password2"/><br />
            <p className="attention">赤字テキスト赤字テキスト</p>
          </td>
        </tr>
        <tr>
          <td>パスワードを忘れた時のヒント<span className="required">※</span></td>
          <td>
            質問&nbsp;:&nbsp;<Select className="select" name="hint1" placeholder="選択してください" size="mini">
              <Select.Option value="1">その1</Select.Option>
              <Select.Option value="2">その2</Select.Option>
              <Select.Option value="3">その3</Select.Option>
            </Select><br />
            答え&nbsp;:&nbsp;<Input className="input-middle" size="mini" name="hint2"/><br />
          </td>
        </tr>
      </table>
    );
  }
}
export default UserTable;