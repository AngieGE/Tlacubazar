import {Router} from 'express';
import {StoreController} from '../controllers'

 export class StoreRoutes{
    public router: Router = Router();
    static instance: StoreRoutes

    static getInstance(): StoreRoutes {
        if (this.instance==null) this.instance = new StoreRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', StoreController.listStore);
        this.router.post('/', StoreController.createStore);
        this.router.put('/:idStore', StoreController.updateStore);
        this.router.delete('/:idStore', StoreController.deleteStore);
    }
}
