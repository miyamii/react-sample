import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import PageTop from '../components/common/pagetop';
import Title from '../components/common/title';
import ProductItem from '../components/common/product_item';

class Archives extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Title title="販売終了一覧" className="bg-white" />
          <ul className="common-list product-items">
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム1" labelKind="soldout" labelText="SOLDOUT" title="タイトル1" expired="2018.10.08" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム2" labelKind="soldout" labelText="SOLDOUT" title="タイトル2" expired="2018.10.08" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム3" labelKind="soldout" labelText="SOLDOUT" title="タイトル3" expired="2018.10.11" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム4" labelKind="soldout" labelText="SOLDOUT" title="タイトル4" expired="2018.10.13" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム5" labelKind="soldout" labelText="SOLDOUT" title="タイトル5" expired="2018.10.15" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム6" labelKind="soldout" labelText="SOLDOUT" title="タイトル6" expired="2018.10.15" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム7" labelKind="soldout" labelText="SOLDOUT" title="タイトル7" expired="2018.10.15" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム8" labelKind="soldout" labelText="SOLDOUT" title="タイトル8" expired="2018.10.15" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム9" labelKind="soldout" labelText="SOLDOUT" title="タイトル9" expired="2018.10.15" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム10" labelKind="soldout" labelText="SOLDOUT" title="タイトル10" expired="2018.10.15" />
            <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム11" labelKind="soldout" labelText="SOLDOUT" title="タイトル11" expired="2018.10.15" />
          </ul>
        </div>
        <Footer />
        <PageTop />
      </div>
    );
  }
}
export default Archives;