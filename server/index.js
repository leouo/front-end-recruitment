const express = require('express');
const routes = require('./api/routes');
const cors = require('./config/cors');
const server = express();
const port = 8888;

server.use(cors);

routes(server);

server.listen(port, () => (
  console.log(`JSON de produtos disponível em: http://localhost:${port}/products`)
));