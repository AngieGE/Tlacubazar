import {Router} from 'express';
import {UserController} from '../controllers'

 export class UserRoutes{
    public router: Router = Router();
    static instance: UserRoutes

    static getInstance(): UserRoutes {
        if (this.instance==null) this.instance = new UserRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/login', UserController.login);
        this.router.get('/', UserController.listUser);
        this.router.get('/:idUser', UserController.getUser);
        this.router.post('/', UserController.createUser);
        this.router.put('/:idUser', UserController.updateUser);
        this.router.delete('/:idUser', UserController.deleteUser);
    }
}


