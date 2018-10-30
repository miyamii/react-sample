import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import MypagePagetop from '../../mypage/pagetop';

storiesOf('MypagePagetop', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    return getMypagePagetop();
  })

  function getMypagePagetop() {
    return (
      <div className="mypage-pagetop">
        <MypagePagetop />
      </div>
    );
  }