import { GET_PRODUCTS, REMOVE_PRODUCT, ADD_PRODUCT } from 'ActionTypes';
import Configs from 'Configs';
import { FetchProducts } from 'Request';

const getProducts = () => {
  return (dispatch) => {
    FetchProducts(Configs.productsAPI)
    .then(result => dispatch({
      type: GET_PRODUCTS,
      payload: result.response.products
    }));
  };
};

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

const remove = item => {
  return {
    type: REMOVE_PRODUCT,
    payload: item
  };
};

export { getProducts, remove, addProduct };
