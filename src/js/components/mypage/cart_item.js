import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Select, Button } from 'element-react';
import Title from './section_title';
// import CartTable from './section_title';

function CartTableRow() {
  return (
    <tr className="cart-product-manipulation">
      <td>
        <Button className="delete-button" size="small"><i className="fas fa-times fa-lg fa-fw" />削除</Button><br />
         <Button className="later-button" size="small">後で買う</Button>
      </td>
       <td className="cart-product-img"><img src="https://placehold.jp/60x60.png" alt="商品画像" /></td>
       <td className="cart-product-name">商品名が入ります</td>
       <td className="cart-product-price">〇〇円</td>
      <td className="cart-product-quantity">
        {/* ここFor */}
        <Select className="select-quantity" size="mini" placeholder="数量">
          <Select.Option value=""></Select.Option>
        </Select>
       </td>
       <td className="cart-product-subtotal">{/*this.state.price * quantity*/}〇〇円</td>
    </tr>
  );
}

function CartTable() {
  const numbers = [];
  for(let i = 0; i < 100; i++){
    numbers.push(i);
  }
  const quantity = [];
  return (
    <table className="cart-table" rules="all">
      <tr>
        <th>操作</th>
        <th>商品写真</th>
        <th>商品名</th>
        <th>単価</th>
        <th>数量</th>
        <th>小計</th>
      </tr>
      <CartTableRow />
      <tr className="cart-product-total">
        <td colspan="5">合計</td>
        <td>〇〇円</td>
      </tr>
    </table>
  );
}

function FormButton() {
  return (
    <div className="cart-button-area">
      <p className="cart-text">上記内容でよろしければ、 購入手続きへ ボタンを押してください。</p>
      <div className="button-wrapper">
        <Button className="back-button" size="small">戻る</Button>
        <Button className="orange-button" size="small">購入手続きへ</Button>
        <Button className="orange-button" size="small">登録済み情報でくじを引く</Button>
      </div>
    </div>
  );
}

function Nothing() {
  return (
    <p className="cart-attention">※現在カート内に商品はありません。</p>
  );
}

class CartItem extends React.Component {
  render() {
    return (
      <li className="cart-item">
        <Title title={this.props.title} />
        <form action="/" method="">
          <CartTable />
          <FormButton />
          <Nothing />
        </form>
      </li>
    );
  }
}

export default CartItem;