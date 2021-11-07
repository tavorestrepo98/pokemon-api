import { Router } from 'express';
import { query } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';

import { getPokemons } from '../controllers/pokemons.controller';

export const pokemonsRouter = Router();

pokemonsRouter.get('/battle', [
    query('pokemon1', 'el id del pokemon 1 es obligatorio').not().isEmpty(),
    query('pokemon2', 'el id del pokemon 2 es obligatorio').not().isEmpty(),
    validarCampos
], getPokemons);