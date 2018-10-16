import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Select, Button } from 'element-react';
import Title from './section_title';
// import CartTable from './section_title';

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
      <tr>
        <td></td>
        <td></td>
        <td>商品名が入ります</td>
        <td>〇〇円</td>
        <td>
          {/* ここFor */}
          <Select className="quantity">
            <Select.Option value=""></Select.Option>
          </Select>
        </td>
        <td>{/*this.state.price * quantity*/}円</td>
      </tr>
      <tr>
        <td colspan="5">合計</td>
        <td></td>
      </tr>
    </table>
  );
}

function FormButton() {

}

class CartItem extends React.Component {
  render() {
    return (
      <li className="cart-item">
        <Title title={this.props.title} />
        <form action="/" method="">
        <CartTable />
        
        </form>
      </li>
    );
  }
}

export default CartItem;