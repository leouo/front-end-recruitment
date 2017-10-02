import { addItem, removeItem } from 'Utils';

const INITIAL_STATE = { items: [] };

export default (state = INITIAL_STATE, action) => {
  let cartItems = [];
  switch (action.type) {
    case 'ADD_PRODUCT':
      cartItems = addItem(state.items, action.payload);
      return { items: cartItems };
    case 'REMOVE_PRODUCT':
      cartItems = removeItem(state.items, action.payload);
      return { items: cartItems };
    default:
      return state;
  }
};
