import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { pokemonsRouter } from './pokemons/routes/pokemons.routes';

const port: string = '3000';

const path = {
    pokemon: '/api/v1/pokemons'
}


const app: express.Application = express();

app.use(morgan('dev'));

//middlewares
app.use(cors({origin: true}));
app.use(express.json());


//routes
app.use(path.pokemon, pokemonsRouter);


app.listen(port, () => {
    console.log('Escuchando puerto ', port);
});