import React, { Component } from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import PageTop from '../components/common/pagetop';
import Title from '../components/common/title';
import SectionTitle from '../components/common/section_title';
import FaqItem from '../components/common/faq_item';

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
              <FaqItem question="質問文です" answer="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"/>
              <FaqItem question="質問" answer={<a href="#" className="common-text-link">リンクテストです</a>}/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
            </li>
            <li className="common-list-item">
              <SectionTitle title="分類2"/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
            </li>
            <li className="common-list-item">
              <SectionTitle title="分類3" />
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
            </li>
            <li className="common-list-item">
              <SectionTitle title="分類4" />
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
              <FaqItem question="質問" answer="回答"/>
            </li>
          </ul>
        </div>
        <Footer />
        <PageTop />
      </div>
    );
  }
}
export default Faq;