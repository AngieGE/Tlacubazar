import {Router} from 'express';
import {StoreReviewController} from '../controllers'

 export class StoreReviewRoutes{
    public router: Router = Router();
    static instance: StoreReviewRoutes

    static getInstance(): StoreReviewRoutes {
        if (this.instance==null) this.instance = new StoreReviewRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', StoreReviewController.listStoreReview);
        this.router.get('/:idStoreReview', StoreReviewController.getStoreReview);
        this.router.post('/', StoreReviewController.createStoreReview);
        this.router.put('/:idStoreReview', StoreReviewController.updateStoreReview);
        this.router.delete('/:idStoreReview', StoreReviewController.deleteStoreReview);
    }
}


