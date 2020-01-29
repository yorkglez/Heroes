//*Imports
//Import express
import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

//import routes
import indexRoutes from './routes/indexRoutes';
import heroesRoutes from './routes/heroeRoutes';
class Server 
{
    //*Create express object
    private app: Application;
    constructor()
    {
        //*Innit express
        this.app = express();
        this.config();
        this.routes();
    }

    //*Config port server
    config(): void 
    {
        this.app.set('port',process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        //*Accept json format
        this.app.use(express.json());
        //*Accept data from html form
        this.app.use(express.urlencoded({extended: false}));
    }

    //*API routes
    routes(): void 
    {
        this.app.use('/',indexRoutes);
        this.app.use('/api/heroes',heroesRoutes);
    }

    //*Start Server
    start(): void
    {
        this.app.listen(this.app.get('port'),() => 
        {
            console.log('Server on port: ', this.app.get('port'));
        });
    }
}

const SERVER = new Server();
SERVER.start();