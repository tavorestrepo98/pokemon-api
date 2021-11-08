import http from '../../config/http-common';
import { Pokemon } from '../models/pokemon.models';

export const pokemonExist = async (nombre: string) => {
    const respuesta = await http.get<Pokemon>(`/pokemon/${nombre}`);
    const pokemon: Pokemon = respuesta.data;

    if(!pokemon){
        throw new Error(`El pokemon con el nombre ${nombre} no existe`);
    }
}