import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Faqitem extends React.Component {
  render() {
    return (
      <li className="faq-item">
        <h3><img src="https://placehold.jp/40x40.png?text=Q" />{this.props.question}</h3>
        <p><img src="https://placehold.jp/40x40.png?text=A" />{this.props.answer}</p>
      </li>
    );
  }
}
export default Faqitem;