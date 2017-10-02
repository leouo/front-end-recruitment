import {combineReducers} from 'redux';
import Catalog from './Catalog';
import Cart from './Cart';

const Reducers = combineReducers({
  catalog: Catalog,
  cart: Cart
});

export default Reducers;
