import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'element-react';

function Timeline() {
  return (
    <div className="info-timeline">
      <hr />
    </div>
  );
}

class Info extends React.Component {
  render() {
    const paymentTitle = "お支払い方法 <i className='fas fa-caret-down fa-lg fa-fw'/ >";
    console.log(paymentTitle);
    const activeName = "1";
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
          {/* <Collapse value={activeName}>
      <Collapse.Item title={"お支払い方法"} name="1">
        <div>ここに内容が入ります</div>
        <div>ここに内容が入ります</div>
      </Collapse.Item>
      </Collapse> */}
      <ul className="info-payment">
        <li>お支払い方法&nbsp;<i className='fas fa-caret-down fa-lg fa-fw'/ ></li>
      {/* <ul className="">
        <li><a href="#">下記のお支払い方法がお選びいただけます。</a></li>
        <li><a href="#">クレジットカード決済</a></li>
        <li><a href="#">コンビニ決済</a></li>
        <li><a href="#">キャリア決済</a></li>
      </ul> */}
      </ul>
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