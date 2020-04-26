import {Router} from 'express';
import userController from '../controllers/UserController'

class UserRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', userController.list);
        this.router.get('/:id', userController.getOne);
        this.router.post ('/', userController.create);
        this.router.delete ('/:id', userController.delete);
        this.router.put('/:id', userController.update);

    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
