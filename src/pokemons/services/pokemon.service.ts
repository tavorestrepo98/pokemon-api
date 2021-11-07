import { AxiosResponse } from 'axios';

import http from '../../config/http-common';

import { Pokemon } from '../models/pokemon.models';


export class PokemonService {
    
    constructor(){}
    
    async getPokemon(id1: string, id2: string): Promise<Pokemon[]> {

        const resp = await Promise.all([
            http.get<Pokemon>(`/pokemon/${id1}`),
            http.get<Pokemon>(`/pokemon/${id2}`)
        ]);

        return [resp[0].data, resp[1].data];
    }


}