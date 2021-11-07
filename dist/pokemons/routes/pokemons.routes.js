"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonsRouter = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var validar_campos_1 = require("../middlewares/validar-campos");
var pokemons_controller_1 = require("../controllers/pokemons.controller");
exports.pokemonsRouter = express_1.Router();
exports.pokemonsRouter.get('/battle', [
    express_validator_1.query('pokemon1', 'el id del pokemon 1 es obligatorio').not().isEmpty(),
    express_validator_1.query('pokemon2', 'el id del pokemon 2 es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], pokemons_controller_1.getPokemons);
