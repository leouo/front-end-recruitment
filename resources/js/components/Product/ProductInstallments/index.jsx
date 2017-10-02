import React from 'react';
import { getInstallments } from 'Utils';
import './style.scss';

const ProductInstallments = props => {
  let { installments, price } = props;
  let formatedInstallments = getInstallments(installments, price);

  return (
    !!installments && <p styleName='product-installments'>ou {installments} x R$<strong>{formatedInstallments}</strong></p>
  );
};

export default ProductInstallments;
