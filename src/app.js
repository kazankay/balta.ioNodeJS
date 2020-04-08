const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const conn = require('./conn');

// Carregando as Models
const Product = require('./models/Product');
const Costumer = require('./models/Custumer');
const Order = require('./models/Order');

// Carregar as rotas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const indexRoute = require('./routes/indexRoute');
const productRouter = require('./routes/productRoute');
const customerRouter = require('./routes/customerRoute');
const orderRouter = require('./routes/orderRoute');

app.use('/', indexRoute);
app.use('/products', productRouter)
app.use('/customers', customerRouter)
app.use('/orders', orderRouter)

module.exports = app;
