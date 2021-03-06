"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemons = void 0;
var pokemon_service_1 = require("../services/pokemon.service");
var pokemonService = new pokemon_service_1.PokemonService();
var getPokemons = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pokemon1, pokemon2, pokemones, pokemon1types, pokemon2types, tipos1, tipos2, tiposPokemones, puntos;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('queryParams: ', req.query);
                _a = req.query, pokemon1 = _a.pokemon1, pokemon2 = _a.pokemon2;
                return [4 /*yield*/, pokemonService.getPokemon(pokemon1, pokemon2)];
            case 1:
                pokemones = _b.sent();
                pokemon1types = [];
                pokemon2types = [];
                pokemones[0].types.forEach(function (tipo) {
                    pokemon1types.push(tipo.type.name);
                });
                pokemones[1].types.forEach(function (tipo) {
                    pokemon2types.push(tipo.type.name);
                });
                return [4 /*yield*/, pokemonService.getTypes(pokemon1types)];
            case 2:
                tipos1 = _b.sent();
                return [4 /*yield*/, pokemonService.getTypes(pokemon2types)];
            case 3:
                tipos2 = _b.sent();
                tiposPokemones = [tipos1, tipos2];
                puntos = [0, 0];
                tiposPokemones[0].forEach(function (tipo) {
                    if (tipo.damage_relations.double_damage_from.filter(function (ddf) { return pokemon2types.includes(ddf.name); }).length !== 0) {
                        puntos[0] -= 70;
                    }
                    if (tipo.damage_relations.double_damage_to.filter(function (ddf) { return pokemon2types.includes(ddf.name); }).length !== 0) {
                        puntos[0] += 70;
                    }
                    if (tipo.damage_relations.half_damage_from.filter(function (ddf) { return pokemon2types.includes(ddf.name); }).length !== 0) {
                        puntos[0] -= 30;
                    }
                    if (tipo.damage_relations.half_damage_to.filter(function (ddf) { return pokemon2types.includes(ddf.name); }).length !== 0) {
                        puntos[0] += 30;
                    }
                });
                tiposPokemones[1].forEach(function (tipo) {
                    if (tipo.damage_relations.double_damage_from.filter(function (ddf) { return pokemon1types.includes(ddf.name); }).length !== 0) {
                        puntos[1] -= 70;
                    }
                    if (tipo.damage_relations.double_damage_to.filter(function (ddf) { return pokemon1types.includes(ddf.name); }).length !== 0) {
                        puntos[1] += 70;
                    }
                    if (tipo.damage_relations.half_damage_from.filter(function (ddf) { return pokemon1types.includes(ddf.name); }).length !== 0) {
                        puntos[1] -= 30;
                    }
                    if (tipo.damage_relations.half_damage_to.filter(function (ddf) { return pokemon1types.includes(ddf.name); }).length !== 0) {
                        puntos[1] += 30;
                    }
                });
                console.log(puntos);
                // const tiposPokemones: TypePokemon[] = await pokemonService.getTypes(pokemones[0].id, pokemones[1].id);
                res.status(200).json({
                    ok: true,
                    puntos: {
                        pokemon1: puntos[0],
                        pokemon2: puntos[1]
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getPokemons = getPokemons;
