import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CommonHeader from '../../common/header';

storiesOf('CommonHeader', module)
  .add('all active', () => {
    const todoItems = [
      { id: 'one', text: 'Item One', completed: false },
      { id: 'two', text: 'Item Two', completed: false },
    ];

    return getMainSection(todoItems);
  })
  .add('some completed', () => {
    const todoItems = [
      { id: 'one', text: 'Item One', completed: false },
      { id: 'two', text: 'Item Two', completed: true },
    ];

    return getMainSection(todoItems);
  })

  function getMainSection(todos) {
    const actions = {
      clearCompleted: action('clearCompleted'),
      completeAll: action('completeAll')
    };
  
    return (
      <div className="todoapp">
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }