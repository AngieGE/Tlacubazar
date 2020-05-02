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
        //this.router.get('/', StoreController.listUser);
        //this.router.post('/', StoreController.createUser);
        //this.router.put('/:idStore', StoreController.updateUser);
        //this.router.delete('/:idStore', StoreController.deleteUser);
    }
}


