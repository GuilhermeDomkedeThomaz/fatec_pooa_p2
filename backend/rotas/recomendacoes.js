const express = require("express");
const router = express.Router();
const Recomendacao = require('../models/recomendacao');

router.post('', (req, res, next) => {
  const recomendacao = new Recomendacao({
    descricao: req.body.descricao,
    dataCriacao: new Date()
  });

  recomendacao.save()
  .then(recomendacaoInserida => {
    res.status(201).json({
      mensagem: 'Recomendação inserida',
      id: recomendacaoInserida._id
    })
  })
});

router.get('', (req, res, next) => {
  Recomendacao.find().then(documents => {
    documents.sort(function order(a, b) {
      if (a.dataCriacao > b.dataCriacao) return -1;
      if (a.dataCriacao < b.dataCriacao) return 1;
      return 0;
    });

    res.status(200).json({
      mensagem: "Tudo OK",
      recomendacoes: documents
    });
  });
});

router.delete('/:id', (req, res, next) => {
  Recomendacao.deleteOne({_id: req.params.id}).then((resultado) => {
    console.log (resultado);
    res.status(200).json({mensagem: "Cliente removido"})
  });
});

module.exports = router;
