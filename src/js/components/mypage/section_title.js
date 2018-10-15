import React, { Component } from 'react';

class MypageSectionTitle extends React.Component {
  render() {
    return (
      <div className="mypage-list-item">
        <h2 className="mypage-h2">{this.props.title}</h2>
      </div>
    );
  }
}

export default MypageSectionTitle;