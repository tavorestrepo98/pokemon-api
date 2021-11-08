import express, { Application } from 'express';
import cors from 'cors';

import { pokemonsRouter } from '../pokemons/routes/pokemons.routes';

interface Path {
    pokemon: string
}

export class Server {

    private path: Path;
    private port: string;
    private app: Application;

    constructor(){
        this.port = process.env.PORT || '3000';
        this.path = {
            pokemon: '/api/v1/pokemons'
        }

        this.app = express();

        //middlewares
        this.middlewares();

        //routes
        this.routes();

        //listen
        this.listen();

    }


    private middlewares(){
        this.app.use(cors({origin: true}));
        this.app.use(express.json());
    }

    private routes(){
        this.app.use(this.path.pokemon, pokemonsRouter);
    }
    
    private listen(){
        this.app.listen(this.port, () => {
            console.log('Excuchando puerto ', this.port);
        });
    }

}