/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da(s) API's da aplicação
 * Data: 15/04/2020
 * Author: Glaucia Lemos
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0'
  })
});

module.exports = router;