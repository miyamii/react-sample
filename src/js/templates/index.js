import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import '../../css/style.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

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
        <li>
          <a href="#">
            <figure><img src="https://placehold.jp/300x200.png" alt="アイテム1" /></figure>
            <div className="item-card">
              <p className="label label-new">NEW</p>
              <h4>テキスト1</h4>
              <p className="expired">テキスト1</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="https://placehold.jp/300x200.png" alt="アイテム2" /></figure>
            <div className="item-card">
              <p className="label label-new">NEW</p>
              <h4>テキスト2</h4>
              <p className="expired">テキスト2</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="https://placehold.jp/300x200.png" alt="アイテム3" /></figure>
            <div className="item-card">
              <p className="label label-new">NEW</p>
              <h4>テキスト3</h4>
              <p className="expired">テキスト3</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="https://placehold.jp/300x200.png" alt="アイテム4" /></figure>
            <div className="item-card">
              <p className="label label-soldout">SOLD OUT</p>
              <h4>テキスト4</h4>
              <p className="expired">テキスト4</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="https://placehold.jp/300x200.png" alt="アイテム5" /></figure>
            <div className="item-card">
              <p className="label label-soldout">SOLD OUT</p>
              <h4>テキスト5</h4>
              <p className="expired">テキスト5</p>
            </div>
          </a>
        </li>
      </ul>
      <button className="link-list">一覧へ</button>
    </section>
  );
}

function News() {
  return (
    <section className="news">
      <h2><span className="stripe">新着情報</span></h2>
      <ul>
        <li className="news-item">
          <p className="news-date">2018.10.01</p>
          <p className="label-soldout">INFO</p>
          <p className="news-text"><a href="#">おはようございます！</a></p>
        </li>
        <li className="news-item">
          <p className="news-date">2018.09.30</p>
          <p className="label-new">NEW</p>
          <p className="news-text"><a href="#">テキストテキストテキストテキストテキストテキストテキストテキスト</a></p>
        </li>

        <li className="news-item">
          <p className="news-date">2018.09.22</p>
          <p className="label-new">NEW</p>
          <p className="news-text"><a href="#">おはようございます！</a></p>
        </li>

        <li className="news-item">
          <p className="news-date">2018.09.13</p>
          <p className="label-new">NEW</p>
          <p className="news-text"><a href="#">テキストテキストテキストテキストテキストテキストテキストテキスト</a></p>
        </li>

      </ul>
    </section>
  );
}

function Info() {
  return (
    <section className="info">
      <div className="info-guide">
        <h2 className="info-title stripe">Information</h2>
        <div>
          <p>テキスト</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <ul>
          <li>お支払い方法</li>
          <li><a href="#">よくあるご質問(FAQ)</a></li>
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
      <div className="container">
        <Header />
        <TopSlider />
        <List />
        <News />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default Index;