/**
 * Arquivo: src/controllers/product.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'Product'.
 * Data: 15/04/2020
 * Author Glaucia Lemos
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Product'
exports.createProduct = async(req, res) => {
  const { product_name, quantity, price } = req.body;
  const response = await db.query(
    'INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)',
    [product_name, quantity, price]
  );

  res.status(201).send({
    message: 'Product added succesfully!',
    body: {
      product: { product_name, quantity, price}
    },
  });
};

//==> Metodo responsável por selecionar todos os 'Products'
exports.listAllProducts = async(req, res) => {
  const response = await db.query('SELECT * FROM products ORDER BY product_name ASC');
  res.status(200).send(response.rows);
};