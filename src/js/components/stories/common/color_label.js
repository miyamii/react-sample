import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router';

storiesOf('ColorLabel', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('New', () => {
    const className = "label-new";
    const labelText = "NEW";
    return getColorLabel(className, labelText);
  })

  .add('Info', () => {
    const className = "label-info";
    const labelText = "INFO";
    return getColorLabel(className, labelText);
  })

  .add('SoldOut', () => {
    const className = "label-soldout";
    const labelText = "SOLDOUT";
    return getColorLabel(className, labelText);
  })

  function getColorLabel(className, labelText) {
    return (
      <p className={className}>{labelText}</p>
    );
  }