import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../css/style.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

function Title() {
  return (
    <div className="common-title">
      <h1 className="common-h1"><span className="stripe">注意事項</span></h1>
    </div>
  );
}

function Section() {
  return (
    <li className="common-list-item">
      <h2 className="common-h2">タイトル</h2>
      <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </li>
  );
}

class Notice extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Title />
          <ul className="common-list">
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Notice;