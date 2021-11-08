# Pokemon api

Api de consulta de batallas entre dos pokemones, esta api está hecha con nodejs, express y typescript

## Development serve

Para servir esta api en local debes correr dos comandos:
- tsc --watch  (Para que typescript detecte y transpile cambios)
- npm run dev ó npm start (Para servir la api, run dev sólo si tienes nodemon global)

## Production api

Para probar la api debes usar este link [https://prueba-pokemon-api.herokuapp.com](https://prueba-pokemon-api.herokuapp.com) y usar la siguiente ruta: https://prueba-pokemon-api.herokuapp.com/api/v1/pokemons/battle, debes de mandar por queryparams los nombres de pokemon1 y pokemon2.