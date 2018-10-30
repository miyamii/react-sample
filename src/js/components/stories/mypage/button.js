import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Submit', () => {
    const className = "submit-button";
    const buttonText = "確認ページへ";
    return getButton(className, buttonText);
  })

  .add('Return', () => {
    const className = "back-button";
    const buttonText = "戻る";
    return getButton(className, buttonText);
  })

  .add('Normal', () => {
    const className = "normal-button";
    const buttonText = "情報を追加する";
    return getButton(className, buttonText);
  })

  function getButton(className, buttonText) {
    return (
      <button className={className} onClick={ action('button-click') }>{buttonText}</button>
    );
  }