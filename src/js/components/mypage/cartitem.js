import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../../css/style.css';
import Title from './sectiontitle';

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