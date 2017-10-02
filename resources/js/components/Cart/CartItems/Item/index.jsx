import React, { Component } from 'react';
import ProductPhoto from 'Components/Product/ProductPhoto';
import ProductName from 'Components/Product/ProductName';
import ProductAttributes from 'Components/Product/ProductAttributes';
import ItemAmount from '../ItemAmount';
import ItemRemove from '../ItemRemove';
import ItemQuantity from '../ItemQuantity';
import './style.scss';

export default class Item extends Component {
  state = {
    specialClass: ''
  };

  setSpecialClass = (className) => {
    return () => this.setState({ specialClass: className });
  }

  render () {
    const { setSpecialClass, props } = this;
    const { item, remove } = props;
    const { id, title, quantity, style, availableSizes, price } = item;

    return (
      <li styleName='cart-item' className={this.state.specialClass}>
        <div styleName='cart-left'>
          <ProductPhoto {...{ id, title, type: 'thumb' }} />
          <ProductName {...{ title }} />
          <ProductAttributes {...{ style, availableSizes }} />
          <ItemQuantity {...{ quantity }} />
        </div>
        <div styleName='cart-right'>
          <ItemRemove {...{ item, remove, setSpecialClass }} />
          <ItemAmount {...{ quantity, price }} />
        </div>
      </li>
    );
  }
}
