import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class NewsItem extends React.Component {
  render() {
    return (
      <li className="news-item">
        <p className="news-date">{this.props.date}</p>
        <p className={this.props.className}>{this.props.labelText}</p>
        <p className="news-text"><Link to={this.props.url}>{this.props.newsText}</Link></p>
      </li>
    );
  }
}
export default NewsItem;