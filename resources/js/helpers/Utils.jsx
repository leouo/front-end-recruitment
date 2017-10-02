export const splitPrice = price => {
  try {
    price = price.toFixed(2).toString().split('.');
    return {int: price[0], float: price[1]};
  } catch (err) {
    return 0;
  }
};

export const getInstallments = (installments, price) => (
  installments > 1 ? setCurrencyFormat(price / installments) : setCurrencyFormat(0)
);

export const setCurrencyFormat = price => price.toFixed(2).replace('.', ',');

export const addItem = (items, item) => {
  let itemPosition = findItem(items, item);

  if (itemPosition !== -1) {
    items[itemPosition].quantity++;
  } else {
    items.push({...item, quantity: 1});
  }

  return [...items];
};

export const removeItem = (items, item) => {
  items.splice(findItem(items, item), 1);
  return [...items];
};

export const findItem = (items, itemToFind) => (
  items.findIndex(item => item.id === itemToFind.id)
);

export const countItems = items => (
  items.reduce((count, item) => count + item.quantity, 0)
);

export const getCartAmount = items => (
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const getCartInstallment = items => (
  items.reduce((maxInstallment, item) => (
    (item.installments > maxInstallment) ? item.installments : maxInstallment
  ), 0)
);
