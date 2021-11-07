import { Request, Response } from 'express';

import { PokemonService } from '../services/pokemon.service';

const pokemonService: PokemonService = new PokemonService();

interface RequestParams extends Request {
    query: {
        pokemon1: string;
        pokemon2: string
    }
}

export const getPokemons = async (req: RequestParams, res: Response) => {
    console.log('queryParams: ', req.query);

    const { pokemon1, pokemon2 } = req.query;
    const respuesta = await pokemonService.getPokemon(pokemon1, pokemon2);
    
    res.json(respuesta);
};