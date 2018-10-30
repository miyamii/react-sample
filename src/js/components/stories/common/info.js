import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import Info from '../../common/info';

storiesOf('Info', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    return getInfo();
  })

  function getInfo() {
    return (
      <div className="common-info">
        <Info />
      </div>
    );
  }