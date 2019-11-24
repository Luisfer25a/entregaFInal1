import mongoose, { Schema } from 'mongoose';

var Songschema: Schema = new Schema({
    id: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    artista: { type: String, required: true },
    album: { type: String, required: true },
    genero: { type: String, required: true },
    duracion: { type: String, required: true }
});

var Song = mongoose.model('Song',Songschema);
export default Song;