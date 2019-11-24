const mongoose = require('mongoose');

var Song = mongoose.model('Song',{
    nombre: { type: String, required: true },
    artista: { type: String, required: true },
    album: { type: String, required: true },
    genero: { type: String, required: true },
    duracion: { type: String, required: true }
});

module.exports = {Song};