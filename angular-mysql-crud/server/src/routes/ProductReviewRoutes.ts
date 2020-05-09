import {Router} from 'express';
import {ProductReviewController} from '../controllers'

 export class ProductReviewRoutes{
    public router: Router = Router();
    static instance: ProductReviewRoutes

    static getInstance(): ProductReviewRoutes {
        if (this.instance==null) this.instance = new ProductReviewRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', ProductReviewController.listProductReview);
        this.router.get('/:idProductReview', ProductReviewController.getProductReview);
        this.router.post('/', ProductReviewController.createProductReview);
        this.router.put('/:idProductReview', ProductReviewController.updateProductReview);
        this.router.delete('/:idProductReview', ProductReviewController.deleteProductReview);
    }
}


