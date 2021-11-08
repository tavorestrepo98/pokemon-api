import { Router } from 'express';
import { query } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { pokemonExist } from '../middlewares/my-validator';

import { getPokemons } from '../controllers/pokemons.controller';

export const pokemonsRouter = Router();

pokemonsRouter.get('/battle', [
    query('pokemon1', 'el nombre del pokemon 1 es obligatorio').not().isEmpty(),
    query('pokemon2', 'el nombre del pokemon 2 es obligatorio').not().isEmpty(),
    query('pokemon1').custom(pokemonExist),
    query('pokemon2').custom(pokemonExist),
    validarCampos
], getPokemons);