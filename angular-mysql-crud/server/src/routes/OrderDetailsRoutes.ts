import {Router} from 'express';
import { OrderDetailsController} from '../controllers/index';

 export class OrderDetailsRoutes{
    public router: Router = Router();
    static instance: OrderDetailsRoutes

    static getInstance(): OrderDetailsRoutes {
        if (this.instance==null) this.instance = new OrderDetailsRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', OrderDetailsController.listOrderDetails);
        this.router.get('/:idOrderDetails', OrderDetailsController.getOrderDetails);
        this.router.post('/', OrderDetailsController.createOrderDetails);
        this.router.put('/:idOrderDetails', OrderDetailsController.updateOrderDetails);
        this.router.delete('/:idOrderDetails', OrderDetailsController.deleteOrderDetails);
    }
}


