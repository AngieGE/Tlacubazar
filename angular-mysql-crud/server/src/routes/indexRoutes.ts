import {Router} from 'express';
import { indexController } from "../controllers/indexController";

class IndexRouter{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', indexController.index);
        
    }
}

const indexRoutes = new IndexRouter();
export default indexRoutes.router;
