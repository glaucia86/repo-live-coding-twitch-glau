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

// ==> Rota responsável por selecionar todos os 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts)

// => Rota responsável por selecionar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// ==> Rota responsável por atualizar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.update('/products/:id', productController.updateProductById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;