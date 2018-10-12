import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../css/style.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ListItem from '../components/common/listitem';
import NewsItem from '../components/common/newsitem';

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

function List() {
  return (
    <section className="list">
      <ul className="list-items">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
      <button className="link-list">一覧へ</button>
    </section>
  );
}

function News() {
  return (
    <section className="news">
      <h2 className="news-title"><span className="stripe">新着情報</span></h2>
      <ul>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
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
          <li><a href="#">よくあるご質問</a></li>
          <li><a href="#">お問い合わせ</a></li>
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
        <div className="index-container">
        <TopSlider />
        <List />
        <News />
        <Info />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;