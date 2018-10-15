import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../css/style.css';
import Header from '../components/mypage/header';
import Footer from '../components/mypage/footer';
import CartItem from '../components/mypage/cartitem';

class Cart extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <ul>
            <CartItem title="現在のカートの中" />
            <CartItem title="あとで買うカートの中" />
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Cart;