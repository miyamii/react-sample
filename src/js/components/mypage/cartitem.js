import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Title from './section_title';

class CartItem extends React.Component {
  render() {
    return (
      <li className="cart-item">
        <Title title={this.props.title} />
      </li>
    );
  }
}

export default CartItem;