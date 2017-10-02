import React from 'react';
import ProductPhoto from './ProductPhoto';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductInstallments from './ProductInstallments';

const Product = props => {
  let product = props.product;
  let { title, id, description, price, installments } = product;

  return (
    <div className='product' onClick={() => props.addProduct(product)}>
      <ProductPhoto {...{ title, id }} />
      <ProductName {...{ title, description }} />
      <ProductPrice {...{ price }} />
      <ProductInstallments {...{ price, installments }} />
    </div>
  );
};

export default Product;
