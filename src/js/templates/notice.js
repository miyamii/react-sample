import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../css/style.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Title from '../components/common/title';
import Section from '../components/common/section';

class Notice extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Title />
          <ul className="common-list">
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Notice;