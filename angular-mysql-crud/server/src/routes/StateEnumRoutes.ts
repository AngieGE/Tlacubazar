import {Router} from 'express';
import {StateEnumController} from '../controllers'

 export class StateEnumRoutes{
    public router: Router = Router();
    static instance: StateEnumRoutes

    static getInstance(): StateEnumRoutes {
        if (this.instance==null) this.instance = new StateEnumRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', StateEnumController.listStateEnum);
        this.router.post('/', StateEnumController.createStateEnum);
        this.router.put('/:idStateEnum', StateEnumController.updateStateEnum);
        this.router.delete('/:idStateEnum', StateEnumController.deleteStateEnum);
    }
}


