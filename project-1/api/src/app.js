/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 15/04/2020
 * Author: Glaucia Lemos
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API
const index = require('./routes/index');
// const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/', productRoute); 

module.exports = app;
