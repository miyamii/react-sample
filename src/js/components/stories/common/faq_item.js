import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import FaqItem from '../../common/faq_item';

storiesOf('FaqItem', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('Regular', () => {
    const question = "これは質問文ですか？";
    const answer = "これは回答文です";
    return getFaqItem(question, answer);
  })

  function getFaqItem(question, answer) {
    return (
      <ul>
        <FaqItem question={question} answer={answer} />
      </ul>
    );
  }