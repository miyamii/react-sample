import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Faqitem extends React.Component {
  render() {
    return (
      <li className="faq-item">
        <h3>{this.props.question}</h3>
        <p>{this.props.answer}</p>
      </li>
    );
  }
}
export default Faqitem;