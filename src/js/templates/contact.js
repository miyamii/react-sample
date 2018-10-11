import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css';
import Header from '../components/mypage/header';
import Footer from '../components/mypage/footer';

function ContactForm() {
  return (
    <form action="#" method="post">
      <table>
        <tr>
          <td>お名前</td>
          <td><input type="text">姓</input><input type="text">名</input></td>
        </tr>
      </table>
    </form>
  );
}

class Contact extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
        <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;