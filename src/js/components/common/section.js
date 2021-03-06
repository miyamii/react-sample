import React, { Component } from 'react';
import SectionTitle from './section_title';

class Section extends React.Component {
  render() {
    return (
      <li className="common-list-item">
        <SectionTitle title={this.props.title} />
        <p className="text">{this.props.text}</p>
      </li>
    );
  }
}
export default Section;