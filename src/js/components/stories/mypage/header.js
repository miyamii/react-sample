import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import MypageHeader from '../../mypage/header';

storiesOf('MypageHeader', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Login', () => {
    const isLogin = true;
    return getMypageHeader(isLogin);
  })

  .add('Logout', () => {
    const isLogin = false;
    return getMypageHeader(isLogin);
  })

  function getMypageHeader(isLogin) {
    return (
      <div className="mypage-header">
        <MypageHeader isLogin={isLogin} />
      </div>
    );
  }