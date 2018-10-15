import React, { Component } from 'react';

class MypageSectionTitle extends React.Component {
  render() {
    return (
      <li className="mypage-list-item">
        <h2 className="mypage-h2">{this.props.title}</h2>
      </li>
    );
  }
}

export default MypageSectionTitle;