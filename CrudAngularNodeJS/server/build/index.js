"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { mongoose } = require('../db');
const bodyParser = require('body-parser');
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const songsRoutes_1 = __importDefault(require("./routes/songsRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/v1/canciones', songsRoutes_1.default);
        module.exports = this.app;
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
