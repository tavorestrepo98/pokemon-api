"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var pokemons_routes_1 = require("../pokemons/routes/pokemons.routes");
var Server = /** @class */ (function () {
    function Server() {
        this.port = process.env.PORT || '3000';
        this.path = {
            pokemon: '/api/v1/pokemons'
        };
        this.app = express_1.default();
        //middlewares
        this.middlewares();
        //routes
        this.routes();
        //listen
        this.listen();
    }
    Server.prototype.middlewares = function () {
        this.app.use(cors_1.default({ origin: true }));
        this.app.use(express_1.default.json());
    };
    Server.prototype.routes = function () {
        this.app.use(this.path.pokemon, pokemons_routes_1.pokemonsRouter);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Excuchando puerto ', _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;
