import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import ProductItem from '../../common/product_item';

storiesOf('ProductItem', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
))
  .add('New', () => {
    const url = "/";
    const imgSrc= "https://placehold.jp/300x200.png";
    const imgAlt= "画像1";
    const labelKind = "new";
    const labelText = "NEW";
    const title = "タイトル1";
    const expired = "2018.10.08";
    return getProductItem(url, imgSrc, imgAlt, labelKind, labelText, title, expired);
  })

  .add('Soldout', () => {
    const url = "/";
    const imgSrc= "https://placehold.jp/300x200.png";
    const imgAlt= "画像2";
    const labelKind = "soldout";
    const labelText = "SOLDOUT";
    const title = "タイトル2";
    const expired = "2018.10.23";
    return getProductItem(url, imgSrc, imgAlt, labelKind, labelText, title, expired);
  })

  function getProductItem(url, imgSrc, imgAlt, labelKind, labelText, title, expired) {
    return (
      <ul className="product-items">
        <ProductItem url={url} imgSrc={imgSrc} imgAlt={imgAlt} labelKind={labelKind} labelText={labelText} title={title} expired={expired} />
      </ul>
    );
  }