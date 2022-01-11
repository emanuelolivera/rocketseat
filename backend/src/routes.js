const express = require('express');

const routes = express.Router();

routes.post('/ongs', (request, response) =>{
    const {nome, email, whatsapp, city, uf } = request.body;


    return response.json();
})
module.exports = routes;