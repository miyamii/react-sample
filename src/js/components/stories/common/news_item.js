import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import NewsItem from '../../common/news_item';

storiesOf('NewsItem', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('New', () => {
    const date = "2018.10.01";
    const className = "label-new";
    const labelText = "NEW";
    const url = "/";
    const newsText = "Hello World";
    return getNewsItem(date, className, labelText, url, newsText);
  })

  .add('Info', () => {
    const date = "2018.10.02";
    const className = "label-info";
    const labelText = "INFO";
    const url = "/";
    const newsText = "こんにちは";
    return getNewsItem(date, className, labelText, url, newsText);
  })

  function getNewsItem(date, className, labelText, url, newsText) {
    return (
      <ul className="news">
        <NewsItem date={date} className={className} labelText={labelText} url={url} newsText={newsText} />
      </ul>
    );
  }