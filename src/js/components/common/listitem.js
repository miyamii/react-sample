import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../../css/style.css';

class ListItem extends React.Component {
  render() {
    return (
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
    );
  }
}

export default ListItem;