"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const songsController_1 = require("../controllers/songsController");
class SongsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', songsController_1.default.list);
        this.router.get('/:id', songsController_1.default.listone);
        this.router.post('/', songsController_1.default.create);
        this.router.put('/:id', songsController_1.default.update);
        this.router.delete('/:id', songsController_1.default.delete);
    }
}
const songsRoutes = new SongsRoutes();
exports.default = songsRoutes.router;
