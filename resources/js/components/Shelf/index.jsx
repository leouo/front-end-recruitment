import React from 'react';
import Product from '../Product';
import './style.scss';

const Shelf = props => {
  let { products, addProduct, openCart } = props;
  return (
    <ul styleName='shelf'>
      {
        products.map(product => (
          <li key={product.sku} styleName='shelf-item' onClick={openCart}>
            <Product {...{ product, addProduct }} />
          </li>
        ))
      }
    </ul>
  );
};

export default Shelf;
