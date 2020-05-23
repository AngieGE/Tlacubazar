import {Router} from 'express';
import { OrderProductController} from '../controllers/index';

 export class OrderProductRoutes{
    public router: Router = Router();
    static instance: OrderProductRoutes

    static getInstance(): OrderProductRoutes {
        if (this.instance==null) this.instance = new OrderProductRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', OrderProductController.listOrderProduct);
        this.router.get('/:idOrderProduct', OrderProductController.getOrderProduct);
        this.router.post('/', OrderProductController.createOrderProduct);
        this.router.put('/:idOrderProduct', OrderProductController.updateOrderProduct);
        this.router.delete('/:idOrderProduct', OrderProductController.deleteOrderProduct);
    }
}


