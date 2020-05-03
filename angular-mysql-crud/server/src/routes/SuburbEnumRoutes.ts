import {Router} from 'express';
import {SuburbEnumController} from '../controllers'

 export class SuburbEnumRoutes{
    public router: Router = Router();
    static instance: SuburbEnumRoutes

    static getInstance(): SuburbEnumRoutes {
        if (this.instance==null) this.instance = new SuburbEnumRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', SuburbEnumController.listSuburbEnum);
        this.router.post('/', SuburbEnumController.createSuburbEnum);
        this.router.put('/:idSuburbEnum', SuburbEnumController.updateSuburbEnum);
        this.router.delete('/:idSuburbEnum', SuburbEnumController.deleteSuburbEnum);
    }
}


