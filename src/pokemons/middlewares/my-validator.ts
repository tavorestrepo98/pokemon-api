import http from '../../config/http-common';
import { Pokemon } from '../models/pokemon.models';

export const pokemonExist = async (id: string) => {
    const respuesta = await http.get<Pokemon>(`/pokemon/${id}`);
    const pokemon: Pokemon = respuesta.data;

    if(!pokemon){
        throw new Error(`El pokemon con el id ${id} no existe`);
    }
}