import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove } from '../../actions';
import { countItems, getCartAmount, getCartInstallment } from 'Utils';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartAmount from './CartAmount';
import CartBuy from './CartBuy';
import './style.scss';

class Cart extends Component {
  render () {
    let { items, remove, cartStateClass, toggleCart } = this.props;
    return (
      <div className='cart' styleName={`cart ${cartStateClass}`}>
        <CartHeader {...{ cartCount: countItems(items), title: 'Sacola' }} />
        <CartItems {...{ items, remove }} />
        <CartAmount {...{ amount: getCartAmount(items), installments: getCartInstallment(items) }} />
        <CartBuy text='Comprar' />
        <div styleName='cart-action' onClick={toggleCart} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ remove }, dispatch);
const mapStateToProps = state => ({items: state.cart.items});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
