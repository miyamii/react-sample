import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import CommonPagetop from '../../common/pagetop';

storiesOf('CommonPagetop', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    return getCommonPagetop();
  })

  function getCommonPagetop() {
    return (
      <div className="common-pagetop">
        <CommonPagetop />
      </div>
    );
  }