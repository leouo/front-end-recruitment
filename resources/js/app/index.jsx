import React, { Component } from 'react';
import Catalog from 'Components/Catalog';
import Cart from 'Components/Cart';

import './App.scss';

export default class App extends Component {
  state = {
    cartStateClass: ''
  }

  toggleCart = () => {
    this.setState({
      cartStateClass: this.state.cartStateClass ? '' : 'cartIsOpen'
    });
  }

  openCart = () => this.setState({ cartStateClass: 'cartIsOpen' });

  render () {
    return (
      <div styleName='root'>
        <div styleName='container'>
          <Catalog {...{ openCart: this.openCart }} />
          <Cart {...{ toggleCart: this.toggleCart, cartStateClass: this.state.cartStateClass }} />
        </div>
      </div>
    );
  }
}
