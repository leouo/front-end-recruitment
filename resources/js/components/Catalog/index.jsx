import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, addProduct } from '../../actions';
import Shelf from 'Components/Shelf';

import './Catalog.scss';

class Catalog extends Component {

  componentDidMount () {
    this.props.getProducts();
  }

  render () {
    const { products, addProduct, openCart } = this.props;
    return (
      <section className='catalog'>
        <Shelf {...{ products, addProduct, openCart }} />
      </section>
    );
  }
}

const mapStateToProps = state => ({products: state.catalog.products});
const mapDispatchToProps = dispatch => bindActionCreators({ getProducts, addProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
