const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
  Nombre:{
    type: String,
    required: true,
  },
  ImagenURL:{
    type: String,
    required: true,
  },
  Precio: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('producto', ProductoSchema);