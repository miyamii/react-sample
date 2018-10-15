import React, { Component } from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="common-title">
        <h1 className="common-h1"><span className="stripe">{this.props.title}</span></h1>
      </div>
    );
  }
}
export default Title;