import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/style.css';
import { Carousel } from 'element-react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import PageTop from '../components/common/pagetop';
import ProductItem from '../components/common/product_item';
import NewsItem from '../components/common/news_item';

function TopSlider() {
  return (
    <section className="top">
      <figure><img src="https://placehold.jp/750x500.png" alt="トップ"/></figure>
      <div className="slide-pager">
      { [1,2,3].map(() => <a href="#">●</a>)}
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="product">
      <ul className="product-items">
        <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム1" labelKind="new" labelText="NEW" title="タイトル1" expired="2018.10.08" />
        <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム2" labelKind="new" labelText="NEW" title="タイトル2" expired="2018.10.08" />
        <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム3" labelKind="soldout" labelText="SOLDOUT" title="タイトル3" expired="2018.10.11" />
        <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム4" labelKind="new" labelText="NEW" title="タイトル4" expired="2018.10.13" />
        <ProductItem url="/" imgSrc="https://placehold.jp/300x200.png" imgAlt="アイテム5" labelKind="new" labelText="NEW" title="タイトル5" expired="2018.10.15" />
      </ul>
      <button className="product-list-button">終了一覧へ</button>
    </section>
  );
}

function News() {
  return (
    <section className="news">
      <h2 className="news-title"><span className="stripe">新着情報</span></h2>
      <ul>
        <NewsItem date="2018.10.01" className="label-new" labelText="NEW" url="/privacy" newsText="Hello World" />
        <NewsItem date="2018.9.01" className="label-new" labelText="NEW" url="/" newsText="Hello World" />
        <NewsItem date="2018.8.01" className="label-info" labelText="INFO" url="/contact" newsText="こんにちは" />
        <NewsItem date="2018.7.01" className="label-new" labelText="NEW" url="/" newsText="Hello World" />
      </ul>
    </section>
  );
}

function Info() {
  return (
    <section className="info">
      <div className="info-guide">
        <h2 className="info-title stripe">Information</h2>
        <ul>
          <li>
            <h3>テキスト</h3>
            <p className="info-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </li>
          <li className="pulldown">お支払い方法</li>
          <li><Link to="/faq">よくあるご質問</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
      </ul>
      </div>
      <div>
        <Timeline />
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <div className="info-timeline">
      <hr />
    </div>
  );
}

class Index extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
        <TopSlider />
        <Product />
        <News />
        <Info />
        </div>
        <Footer />
        <PageTop />
      </div>
    );
  }
}

export default Index;