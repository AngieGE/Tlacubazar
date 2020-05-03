import {Router} from 'express';
import {AddressEnumController} from '../controllers'

 export class AddressEnumRoutes{
    public router: Router = Router();
    static instance: AddressEnumRoutes

    static getInstance(): AddressEnumRoutes {
        if (this.instance==null) this.instance = new AddressEnumRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', AddressEnumController.listAddressEnum);
        this.router.post('/', AddressEnumController.createAddressEnum);
        this.router.put('/:idAddressEnum', AddressEnumController.updateAddressEnum);
        this.router.delete('/:idAddressEnum', AddressEnumController.deleteAddressEnum);
    }
}


