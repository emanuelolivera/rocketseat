const express = require('express');
const crypto = require('crypto')

const routes = express.Router();

routes.post('/ongs', (request, response) =>{
    const {nome, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX')/*usado o metodo crypto para gerar um numero aleatorio e passando para string como hexadecimal */

    return response.json();
})
module.exports = routes;