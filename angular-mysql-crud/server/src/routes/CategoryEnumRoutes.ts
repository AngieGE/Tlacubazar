import {Router} from 'express';
import {CategoryEnumController} from '../controllers'

 export class CategoryEnumRoutes{
    public router: Router = Router();
    static instance: CategoryEnumRoutes

    static getInstance(): CategoryEnumRoutes {
        if (this.instance==null) this.instance = new CategoryEnumRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', CategoryEnumController.listCategoryEnum);
    }
}
