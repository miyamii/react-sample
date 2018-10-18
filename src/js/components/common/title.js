import React, { Component } from 'react';

class Title extends React.Component {
  render() {
    const className = this.props.className == undefined ? '' : this.props.className;
    return (
      <h1 className={'common-h1 ' + className}><span className="stripe">{this.props.title}</span></h1>
    );
  }
}
export default Title;