import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Timeline() {
  return (
    <div className="info-timeline">
      <hr />
    </div>
  );
}

class Info extends React.Component {
  render() {
    return (
      <section className="info">
      <div className="info-guide">
        <h2 className="info-title stripe">Information</h2>
        <ul>
          <li>
            <h3>テキスト</h3>
            <p className="info-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </li>
          <li>遊び方&nbsp;<i className="fas fa-caret-right fa-lg fa-fw"/ ></li>
          <li className="pulldown">お支払い方法&nbsp;<i className="fas fa-caret-down fa-lg fa-fw"/ ></li>
          <li><Link to="/faq">よくあるご質問&nbsp;<i className="fas fa-caret-right fa-lg fa-fw"/ ></Link></li>
          <li><Link to="/contact">お問い合わせ&nbsp;<i className="fas fa-caret-right fa-lg fa-fw"/ ></Link></li>
      </ul>
      </div>
      <div>
        <Timeline />
      </div>
    </section>
    );
  }
}
export default Info;