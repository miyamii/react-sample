import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import CommonFooter from '../../common/footer';

storiesOf('CommonFooter', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    return getCommonFooter();
  })

  function getCommonFooter() {
    return (
      <div className="common-footer">
        <CommonFooter />
      </div>
    );
  }