// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 * Data: 15/04/2020
 * Author Glaucia Lemos
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controllers');

//==> Definindo as rotas do CRUD - 'Product'

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

module.exports = router;