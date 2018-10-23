import React, { Component } from 'react';
import { Form, Button } from 'element-react';
import Header from '../../components/mypage/header';
import Footer from '../../components/mypage/footer';
import PageTop from '../../components/mypage/pagetop';
import SectionTitle from '../../components/mypage/section_title';
import UserTable from '../../components/mypage/user_table';

class EntryForm extends React.Component {
  render() {
    return (
      <Form className="form-input" onSubmit={this.handleSubmit}>
        <UserTable />
        <div className="button-wrapper">
          <Button className="submit-button" size="small" nativeType="submit">確認ページへ</Button>
        </div>
      </Form>
    );
  }
}

class Entry extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="mypage-list">
            <SectionTitle title="会員登録" />
            <EntryForm />
          </div>
        </div>
        <PageTop />
        <Footer />
      </div>
    );
  }
}
export default Entry;