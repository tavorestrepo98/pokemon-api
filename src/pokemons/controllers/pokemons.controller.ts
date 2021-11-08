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
        pokemon1types.push(tipo.type.name);
    });

    pokemones[1].types.forEach((tipo: Type) => {
        pokemon2types.push(tipo.type.name);
    });

    const tipos1: TypePokemon[] = await pokemonService.getTypes(pokemon1types);
    const tipos2: TypePokemon[] = await pokemonService.getTypes(pokemon2types);

    const tiposPokemones: TypePokemon[][] = [tipos1, tipos2];

    const puntos: number[] = [0, 0];

    tiposPokemones[0].forEach(tipo => {
        if(tipo.damage_relations.double_damage_from.filter(ddf => pokemon2types.includes(ddf.name)).length !== 0){
            puntos[0] -= 70;
        }

        if(tipo.damage_relations.double_damage_to.filter(ddf => pokemon2types.includes(ddf.name)).length !== 0){
            puntos[0] += 70;
        }

        if(tipo.damage_relations.half_damage_from.filter(ddf => pokemon2types.includes(ddf.name)).length !== 0){
            puntos[0] -= 30;
        }

        if(tipo.damage_relations.half_damage_to.filter(ddf => pokemon2types.includes(ddf.name)).length !== 0){
            puntos[0] += 30;
        }

    })

    tiposPokemones[1].forEach(tipo => {
    
        if(tipo.damage_relations.double_damage_from.filter(ddf => pokemon1types.includes(ddf.name)).length !== 0){
            puntos[1] -= 70;
        }

        if(tipo.damage_relations.double_damage_to.filter(ddf => pokemon1types.includes(ddf.name)).length !== 0){
            puntos[1] += 70;
        }

        if(tipo.damage_relations.half_damage_from.filter(ddf => pokemon1types.includes(ddf.name)).length !== 0){
            puntos[1] -= 30;
        }

        if(tipo.damage_relations.half_damage_to.filter(ddf => pokemon1types.includes(ddf.name)).length !== 0){
            puntos[1] += 30;
        }

    })

    console.log(puntos);

    // const tiposPokemones: TypePokemon[] = await pokemonService.getTypes(pokemones[0].id, pokemones[1].id);

    
    res.status(200).json({
        ok: true,
        puntos: {
            pokemon1: puntos[0],
            pokemon2: puntos[1]
        }
    });
};