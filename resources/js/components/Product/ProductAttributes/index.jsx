import React from 'react';
import './style.scss';

const ProductAttributes = ({ availableSizes, style }) => (
  <ul className='product-atrributes'>
    <li styleName='product-atrribute'>{availableSizes}</li>
    <li styleName='product-atrribute'>{style}</li>
  </ul>
);

export default ProductAttributes;
