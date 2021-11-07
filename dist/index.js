"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var pokemons_routes_1 = require("./pokemons/routes/pokemons.routes");
var port = '3000';
var path = {
    pokemon: '/api/v1/pokemons'
};
var app = express_1.default();
app.use(morgan_1.default('dev'));
//middlewares
app.use(cors_1.default({ origin: true }));
app.use(express_1.default.json());
//routes
app.use(path.pokemon, pokemons_routes_1.pokemonsRouter);
app.listen(port, function () {
    console.log('Escuchando puerto ', port);
});
