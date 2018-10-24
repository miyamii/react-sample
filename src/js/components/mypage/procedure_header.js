import React, { Component } from 'react';
import SectionTitle from '../../components/mypage/section_title';


class ProcedureHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src="https://placehold.jp/700x80.png" alt={this.props.alt}/>
        <SectionTitle title={this.props.title} />
      </React.Fragment>
    );
  }
}
export default ProcedureHeader;