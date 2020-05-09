import {Router} from 'express';
import {DeliveryMethodController} from '../controllers'

 export class DeliveryMethodRoutes{
    public router: Router = Router();
    static instance: DeliveryMethodRoutes

    static getInstance(): DeliveryMethodRoutes {
        if (this.instance==null) this.instance = new DeliveryMethodRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', DeliveryMethodController.listDeliveryMethod);
        this.router.post('/', DeliveryMethodController.createDeliveryMethod);
        //this.router.put('/:fkStore/:fkDeliveryMethodEnum', DeliveryMethodController.updateDeliveryMethod);
        this.router.delete('/:fkStore/:fkDeliveryMethodEnum', DeliveryMethodController.deleteDeliveryMethod);
    }
}
