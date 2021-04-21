const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', paginaInicial)
app.get('/produtos', paginaProdutos)

app.listen(3001);

const produtos = [
    {codigo: 1, desc: 'Retrovisor', preco: 65},
    {codigo: 2, desc: 'Espelho', preco: 30},
    {codigo: 3, desc: 'Insulfilme', preco: 180},
    {codigo: 4, desc: 'Alarme', preco: 450},
    {codigo: 5, desc: 'Troca de óleo', preco: 60},
]

function paginaInicial(req,res){
    res.sendFile(__dirname+'/public/index.html');
}

function paginaProdutos(req,res){
    res.render('lista-produtos', {produtos})
}