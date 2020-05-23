import {Router} from 'express';
import {PaymentMethodController} from '../controllers'

 export class PaymentMethodEnumRoutes{
    public router: Router = Router();
    static instance: PaymentMethodEnumRoutes

    static getInstance(): PaymentMethodEnumRoutes {
        if (this.instance==null) this.instance = new PaymentMethodEnumRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', PaymentMethodController.listPaymentMethodEnum);
        this.router.post('/', PaymentMethodController.createPaymentMethodEnum);
        //this.router.put('/:fkStore/:fkPaymentMethodEnum', PaymentMethodController.updatePaymentMethod);
        this.router.delete('/:fkStore/:fkPaymentMethodEnum', PaymentMethodController.deletePaymentMethodEnum);
    }
}
