"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        //Inicializa express y lo guarda en la propiedad app
        console.log("constructor");
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default({ origin: 'http://localhost:4200' })); //omaigoood, no quiten esa url
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        console.log('en routes');
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/user', userRoutes_1.default);
    }
    start() {
        console.log('en start');
        this.app.listen(this.app.get('port'), () => {
            console.log("en start: Server running on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
