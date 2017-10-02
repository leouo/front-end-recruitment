import React from 'react';
import { getInstallments, setCurrencyFormat } from 'Utils';
import './style.scss';

const CartAmount = ({ amount, installments }) => (
  <div styleName='cart-amount'>
    <div styleName='cart-amount-label'>Subtotal</div>
    <div styleName='cart-amount-subtotal'>
      <div styleName='cart-amount-value'>R$ {setCurrencyFormat(amount)}</div>
      <div styleName='cart-amount-installments'>ou em até {installments} X R$ {getInstallments(installments, amount)}</div>
    </div>
  </div>
);

export default CartAmount;
