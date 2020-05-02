import { Request, Response } from 'express';
import pool from '../database';
import {UserService} from '../services/UserService';
import {User} from '../models';

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
        const { idUser } = req.body; //req.body req.query req.params
        const _usuarios: User[] = await UserService.listUser(idUser);
        res.json({"length": _usuarios.length, "recordset":_usuarios});
    }
    
    static async createUser (req: Request, res: Response) {
        let user: User = req.body;    
        const createdUser=await UserService.createUser(user);   
        console.log(createdUser);
        res.json(createdUser);
    }
    
    static async updateUser(req: Request, res: Response): Promise<void>{
        const { idUser } = req.params;
        let user: User = req.body;    
        const _updateUser=await UserService.updateUser(parseInt(idUser), user);  
        console.log(_updateUser);  
        if (_updateUser.affectedRows < 1) {
            _updateUser.message='the user was not updated ';
        }else{
            _updateUser.message='the user was updated ';
        }
        res.json({updateUser: _updateUser})
    }
    
    static async deleteUser(req: Request, res: Response): Promise<void>{
        const { idUser} = req.params;
        const _deleteUser=await UserService.deleteUser(parseInt(idUser));   
        console.log(_deleteUser);  
        if (_deleteUser.affectedRows < 1) {
            _deleteUser.message='the user was not deleted ';
        }else{
            _deleteUser.message='the user was deleted ';
        }
        res.json({deleteUserUser: _deleteUser})
    }
}
