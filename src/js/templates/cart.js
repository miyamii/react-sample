import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/mypage/header';
import Footer from '../components/mypage/footer';
import PageTop from '../components/mypage/pagetop';
import CartItem from '../components/mypage/cart_item';

class Cart extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header isLogin={true} />
        <div className="container">
          <ul className="mypage-list">
            <CartItem title="現在のカートの中" isAfter={false} buyNum={1}/>
            <CartItem title="あとで買うカートの中" isAfter={true} buyNum={0}/>
          </ul>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Cart;