import React from 'react';
import { setCurrencyFormat } from 'Utils';

import './style.scss';

const ItemAmount = ({ price, quantity }) => (
  <div styleName='item-amount'>R$ {setCurrencyFormat(price * quantity)}</div>
);

export default ItemAmount;
