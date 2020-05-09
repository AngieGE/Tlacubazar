import {Router} from 'express';
import {PaymentController} from '../controllers'

 export class PaymentRoutes{
    public router: Router = Router();
    static instance: PaymentRoutes

    static getInstance(): PaymentRoutes {
        if (this.instance==null) this.instance = new PaymentRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', PaymentController.listPayment);
        this.router.get('/:idPayment', PaymentController.getPayment);
        this.router.post('/', PaymentController.createPayment);
        this.router.put('/:idPayment', PaymentController.updatePayment);
        this.router.delete('/:idPayment', PaymentController.deletePayment);
    }
}


