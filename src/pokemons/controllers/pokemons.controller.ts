import { Request, Response } from 'express';

import { PokemonService } from '../services/pokemon.service';

import { Pokemon, Type } from '../models/pokemon.models';
import { TypePokemon } from '../models/types.model';


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
    const pokemones: Pokemon[] = await pokemonService.getPokemon(pokemon1, pokemon2);

    // const types: Type[][] = [];

    const pokemon1types: string[] = [];
    const pokemon2types: string[] = []

    pokemones[0].types.forEach((tipo: Type) => {
        pokemon1types.push(tipo.type.url);
    });

    pokemones[1].types.forEach((tipo: Type) => {
        pokemon2types.push(tipo.type.url);
    });

    const tipos1: TypePokemon[] = await pokemonService.getTypes(pokemon1types);
    const tipos2: TypePokemon[] = await pokemonService.getTypes(pokemon2types);

    console.log({
        tipos1,
        tipos2
    });

    // const tiposPokemones: TypePokemon[] = await pokemonService.getTypes(pokemones[0].id, pokemones[1].id);

    
    res.status(200).json({
        ok: true
    });
};