import {Router} from 'express';
import {ProductController} from '../controllers'

 export class ProductRoutes{
    public router: Router = Router();
    static instance: ProductRoutes

    static getInstance(): ProductRoutes {
        if (this.instance==null) this.instance = new ProductRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', ProductController.listProduct);
        this.router.get('/:idProduct', ProductController.getProduct);
        this.router.post('/', ProductController.createProduct);
        this.router.put('/:idProduct', ProductController.updateProduct);
        this.router.delete('/:idProduct', ProductController.deleteProduct);
    }
}


