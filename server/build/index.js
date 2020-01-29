"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//*Imports
//Import express
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//import routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const heroeRoutes_1 = __importDefault(require("./routes/heroeRoutes"));
class Server {
    constructor() {
        //*Innit express
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //*Config port server
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        //*Accept json format
        this.app.use(express_1.default.json());
        //*Accept data from html form
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //*API routes
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/heroes', heroeRoutes_1.default);
    }
    //*Start Server
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ', this.app.get('port'));
        });
    }
}
const SERVER = new Server();
SERVER.start();
