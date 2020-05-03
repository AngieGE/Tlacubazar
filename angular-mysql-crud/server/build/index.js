"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
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
        this.app.use('/user', routes_1.UserRoutes.getInstance().router);
        this.app.use('/store', routes_1.StoreRoutes.getInstance().router);
        this.app.use('/address', routes_1.AddressRoutes.getInstance().router);
        this.app.use('/addressEnum', routes_1.AddressEnumRoutes.getInstance().router);
        this.app.use('/stateEnum', routes_1.StateEnumRoutes.getInstance().router);
        this.app.use('/cityEnum', routes_1.CityEnumRoutes.getInstance().router);
        this.app.use('/suburbEnum', routes_1.SuburbEnumRoutes.getInstance().router);
    }
    start() {
        console.log('en start');
        this.app.listen(this.app.get('port'), () => {
            console.log("Server running on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
