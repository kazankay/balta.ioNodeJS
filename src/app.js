const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const conn = require('./conn');

// Carregando as Models
const Product = require('./models/Product');

// Carregar as rotas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const indexRoute = require('./routes/indexRoute');
const productRouter = require('./routes/productRoute');

app.use('/', indexRoute);
app.use('/products', productRouter)

module.exports = app;
