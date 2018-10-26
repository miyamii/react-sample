import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import CommonHeader from '../../common/header';

storiesOf('CommonHeader', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    return getCommonHeader();
  })

  function getCommonHeader() {
    return (
      <div className="common-header">
        <CommonHeader />
      </div>
    );
  }