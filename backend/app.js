const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Recomendacao = require('./models/recomendacao');
const recomendacaoRoutes = require('./rotas/recomendacoes');

mongoose.connect('mongodb+srv://GuilhermeFatecPOOA:POOA@cluster0.saqje.mongodb.net/recomendacoes?retryWrites=true&w=majority').then(() => {
  console.log ("Conexão OK")
}).catch(() => {
  console.log("Conexão NOK")
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/recomendacoes', recomendacaoRoutes);

module.exports = app;
