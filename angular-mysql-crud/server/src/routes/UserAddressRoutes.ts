import {Router} from 'express';
import {UserAddressController} from '../controllers'

 export class UserAddressRoutes{
    public router: Router = Router();
    static instance: UserAddressRoutes

    static getInstance(): UserAddressRoutes {
        if (this.instance==null) this.instance = new UserAddressRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', UserAddressController.listUserAddress);
        this.router.get('/:fkUser/:fkAddress', UserAddressController.getUserAddress);
        this.router.post('/', UserAddressController.createUserAddress);
        this.router.delete('/:idUserAddress', UserAddressController.deleteUserAddress);
    }
}


