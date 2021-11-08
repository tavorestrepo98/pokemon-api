import axios, { AxiosResponse } from 'axios';

import http from '../../config/http-common';

import { environments } from '../../environments/environments';

import { Pokemon, Type } from '../models/pokemon.models';
import { TypePokemon } from '../models/types.model';


export class PokemonService {
    
    constructor(){}
    
    async getPokemon(id1: string, id2: string): Promise<Pokemon[]> {

        const resp: AxiosResponse<Pokemon, any>[] = await Promise.all([
            http.get<Pokemon>(`/pokemon/${id1}`),
            http.get<Pokemon>(`/pokemon/${id2}`)
        ]);

        return [resp[0].data, resp[1].data];
    }


    async getTypes(names: string[]): Promise<TypePokemon[]>{

        const peticionesHttp = names.map(name => {
            return http.get<TypePokemon>(`/type/${name}`);
        });

        const resp: AxiosResponse<TypePokemon, any>[] = await Promise.all(peticionesHttp);

        return resp.map(resp => {
            return resp.data
        });
    }


}