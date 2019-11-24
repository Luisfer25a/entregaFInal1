"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var {Song} = require('../models/song.js');
var redis = require('redis');
const cliente = redis.createClient('redis://redis:6379');

let Canciones = [];
class SongsController {
    list (req, res) {
        var redis_id = 25698;
        cliente.get(redis_id, (err,docs)=>{
            if(err) { console.log('Error while retrieving the data from redis!: ' + err); }
            if(docs){
                console.log('FOUND DATA IN REDIS');
                res.status(200).send(JSON.parse(docs));
            }
            else{
                console.log('NOT FOUND IN REDIS');
        Song.find((err, docs) => {
            cliente.setex(redis_id, 30, JSON.stringify(docs));
             res.status(200).send(docs);
        });
    }
    });
    }
    listone(req, res) {
        cliente.get(req.params.id, (err,docs)=>{
            if(err) { console.log('Error while retrieving the data from redis!: ' + err); }
            if(docs){
                console.log('FOUND DATA IN REDIS');
                res.status(200).send(JSON.parse(docs));
            }
            else{
                console.log('NOT FOUND IN REDIS');
    
            Song.findById(req.params.id, (err, docs) => {
                
                if (!err) { 
                    cliente.setex(req.params.id, 30, JSON.stringify(docs));
                    res.status(200).send(docs);}
                else { res.status(404).json({ Response: '404 Not found' });}
            });
        }
        });
    }
    create(req, res) {
        var sng = new Song({
            nombre: req.body.nombre,
            artista: req.body.artista,
            album: req.body.album,
            genero: req.body.genero,
            duracion: req.body.duracion,
        });
        sng.save((err, doc) => {
            if (!err) { res.status(201).send(doc); }
            else { res.status(404).json({ Response: '404 Not Found' }); }
        });
    }
    delete(req, res) {
        console.log(req.params.id);
        Song.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {res.status(204).send(doc);}
            else {res.status(404).json({ Response: '404 Not Found' });}
        });
    }
    update(req, res) {
        var sng = {
            nombre: req.body.nombre,
            artista: req.body.artista,
            album: req.body.album,
            genero: req.body.genero,
            duracion: req.body.duracion,
        };
        Song.findByIdAndUpdate(req.params.id, { $set: sng }, { new: true }, (err, doc) => {
            if (!err) {res.status(204).send(doc); }
            else {res.status(404).json({ Response: '404 Not Found' }); }
        });
    }
}
const songsController = new SongsController();
exports.default = songsController;
