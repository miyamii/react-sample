import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import { Form, Select, Button } from 'element-react';

class Detail extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}

export default Detail;