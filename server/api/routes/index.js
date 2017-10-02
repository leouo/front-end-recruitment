const productsData = require('../../data/products.json');

module.exports = function(server) {
  server.get('/products', (req, res) => {
    res.send(productsData);
  });
};