import React from 'react';
import { splitPrice } from 'Utils';
import './style.scss';

const ProductPrice = props => {
  const price = props.price;
  return (
    <p styleName='product-price'>
      R$<strong>{splitPrice(price).int}</strong>,{splitPrice(price).float}
    </p>
  );
};

export default ProductPrice;
