import {Router} from 'express';
import { OrderController} from '../controllers/index';

 export class OrderRoutes{
    public router: Router = Router();
    static instance: OrderRoutes

    static getInstance(): OrderRoutes {
        if (this.instance==null) this.instance = new OrderRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', OrderController.listOrder);
        this.router.get('/:idOrder', OrderController.getOrder);
        this.router.post('/', OrderController.createOrder);
        this.router.put('/:idOrder', OrderController.updateOrder);
        this.router.delete('/:idOrder', OrderController.deleteOrder);
    }
}


