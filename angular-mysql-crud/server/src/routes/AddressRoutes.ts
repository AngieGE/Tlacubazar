import {Router} from 'express';
import {AddressController} from '../controllers'

 export class AddressRoutes{
    public router: Router = Router();
    static instance: AddressRoutes

    static getInstance(): AddressRoutes {
        if (this.instance==null) this.instance = new AddressRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', AddressController.listAddress);
        this.router.get('/:idAddress', AddressController.getAddress);
        this.router.post('/', AddressController.createAddress);
        this.router.put('/:idAddress', AddressController.updateAddress);
        this.router.delete('/:idAddress', AddressController.deleteAddress);
    }
}


