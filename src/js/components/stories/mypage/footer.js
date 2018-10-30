import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import MypageFooter from '../../mypage/footer';

storiesOf('MypageFooter', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    return getMypageFooter();
  })

  function getMypageFooter() {
    return (
      <div className="mypage-footer">
        <MypageFooter />
      </div>
    );
  }