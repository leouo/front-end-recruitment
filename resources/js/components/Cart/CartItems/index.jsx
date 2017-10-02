import React, { Component } from 'react';
import Item from './Item';

export default class CartItems extends Component {
  render () {
    const { items, remove } = this.props;
    return (
      <ul className='cart-items'>
        { items.map(item => <Item key={item.id} {...{item, remove}} />) }
      </ul>
    );
  }
}
