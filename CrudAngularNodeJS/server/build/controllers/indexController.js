"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) { res.status(200).send('Hello'); }
}
exports.indexController = new IndexController();
