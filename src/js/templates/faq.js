import React, { Component } from 'react';
import '../../css/style.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Title from '../components/common/title';
import SectionTitle from '../components/common/sectiontitle';
import FaqItem from '../components/common/faqitem';

class Faq extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Title title="よくあるご質問"/>
          <ul className="common-list">
            <li className="common-list-item">
              <SectionTitle title="分類1"/>
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
            </li>
            <li className="common-list-item">
              <SectionTitle title="分類2"/>
              <FaqItem />
              <FaqItem />
              <FaqItem />
            </li>
            <li className="common-list-item">
              <SectionTitle title="分類3" />
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
            </li>
            <li className="common-list-item">
              <SectionTitle title="分類4" />
              <FaqItem />
              <FaqItem />
              <FaqItem />
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Faq;