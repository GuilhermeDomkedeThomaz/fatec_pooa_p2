const mongoose = require ('mongoose');

const recomendacaoSchema = mongoose.Schema({
  descricao: {type: String, required: true},
  dataCriacao: {type: Date, required: true}
});

module.exports = mongoose.model('Recomendacao', recomendacaoSchema);
