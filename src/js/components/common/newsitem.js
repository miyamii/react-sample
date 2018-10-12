import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../../css/style.css';

class NewsItem extends React.Component {
  render() {
    return (
      <li className="news-item">
         <p className="news-date">2018.10.01</p>
        <p className="label-soldout">INFO</p>
        <p className="news-text"><a href="#">おはようございます！</a></p>
      </li>
    );
  }
}
export default NewsItem;