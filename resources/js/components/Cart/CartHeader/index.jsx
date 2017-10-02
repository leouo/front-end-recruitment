import React from 'react';
import CartCount from '../CartCount';

import './style.scss';

const CartHeader = ({ cartCount, title }) => (
  <div styleName='cart-header'>
    <div styleName='icon-bag'>
      <CartCount {...{ cartCount }} />
    </div>
    <div className='cart-title' styleName='cart-title'>{title}</div>
  </div>
);

export default CartHeader;
