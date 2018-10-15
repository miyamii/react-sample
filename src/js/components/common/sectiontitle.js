import React, { Component } from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
      <h2 className="common-h2">{this.props.title}</h2>
    );
  }
}
export default SectionTitle;