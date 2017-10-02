'use strict'

import { expect } from 'chai'
import { removeItem, countItems, getCartAmount, getCartInstallment, findItem, addItem, setCurrencyFormat, getInstallments } from './Utils'

const cart_mock = { 
  items: [
    {id: 0, name: '', quantity: 3, attributes: ['Tamanho', 'Cor'], price: 4.00, installments: 2},
    {id: 7, name: '', quantity: 2, attributes: ['Tamanho', 'Cor'], price: 3.00, installments: 3},
    {id: 4, name: '', quantity: 1, attributes: ['Tamanho', 'Cor'], price: 1.00, installments: 1}
  ] 
};

describe('Utils tests:', () => {
  
  it('count items from cart', () => {
    expect(countItems(cart_mock.items)).to.equal(6)
  });
  
  it('get cart amount', () => {
    expect(getCartAmount(cart_mock.items)).to.equal(19.00)
  });

  it('get big installment from cart items', () => {
    expect(getCartInstallment(cart_mock.items)).to.equal(3)
  });

  it('find item inside cart items', () => {
    expect(findItem(cart_mock.items, {id: 7, name: '', quantity: 2, attributes: ['Tamanho', 'Cor'], price: 3.00, installments: 3}))
    .to.equal(1)
  });

  it('format item price to BR currency format', () => {
    expect(setCurrencyFormat(2.00)).to.equal('2,00')
  });

  it('get value of product installments', () => {
    expect(getInstallments(2, 100.00)).to.equal('50,00')
  });

  it('add item into cart', () => {
    expect(addItem(cart_mock.items, {id: 4, name: '', quantity: 1, attributes: ['Tamanho', 'Cor'], price: 1.00, installments: 1}))
    .to.be.deep.equal([
      {id: 0, name: '', quantity: 3, attributes: ['Tamanho', 'Cor'], price: 4.00, installments: 2},
      {id: 7, name: '', quantity: 2, attributes: ['Tamanho', 'Cor'], price: 3.00, installments: 3},
      {id: 4, name: '', quantity: 2, attributes: ['Tamanho', 'Cor'], price: 1.00, installments: 1}
    ])
  });
  
  it('remove item from cart', () => {
    expect(removeItem(cart_mock.items, {id: 4, name: '', quantity: 0, attributes: ['Tamanho', 'Cor'], price: 0.00}))
    .to.be.deep.equal([
      {id: 0, name: '', quantity: 3, attributes: ['Tamanho', 'Cor'], price: 4.00, installments: 2},
      {id: 7, name: '', quantity: 2, attributes: ['Tamanho', 'Cor'], price: 3.00, installments: 3}
    ])
  });
})