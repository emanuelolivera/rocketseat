const express = require('express');

const app = express();

app.use(express.json())

app.post('/users', (request, response)=>{
    return response.json({
    evento:'aula',
    aluno:'emanuel'
})
})

app.listen(3333);