import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends React.Component {
  render() {
    const className = "product-label label-" + this.props.labelKind;
    return (
      <li>
        <Link to="/">
          <figure><img src={this.props.imgSrc} alt={this.props.imgAlt} /></figure>
          <div className="product-card">
            <p className={className}>{this.props.labelText}</p>
            <h4>{this.props.title}</h4>
            <p className="product-expired">{this.props.expired} まで</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default ProductItem;