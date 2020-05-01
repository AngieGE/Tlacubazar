import { Request, Response } from 'express';
import pool from '../database';
import {UserService} from '../services/UserService';
import {User} from '../models/User';

export class UserController {

    static async login(req: Request, res: Response) {
        const { userName, password } = req.query;
        const _user: User = await UserService.login(userName, password);
        if(_user == null){
            res.json({message:'the user is not valid ', user: null})
        }else{
            res.json({message:'the user is valid', user: _user});
        }
    }

    static async listUser (req: Request, res: Response){
        const { usuario } = req.query;
        const _usuarios: User[] = await UserService.listUser(usuario);
        res.json(_usuarios);
    }
    
    static async createUser (req: Request, res: Response) {
        let user: User = req.body;    
        const createdUser: User[] = await UserService.createUser(user);   
        res.json(createdUser);
    }
    
    static async updateUser(req: Request, res: Response): Promise<void>{
        const { idUser } = req.params;
        let user: User = req.body;    
        await UserService.updateUser(parseInt(idUser), user);    
        res.json({'message':'the usuario was updated '})
    
    }
    
    static async deleteUser(req: Request, res: Response): Promise<void>{
        const { idUser} = req.params;
        await UserService.deleteUser(parseInt(idUser));     
        res.json({'message': 'the usuarios was deleted'});
    }
}
