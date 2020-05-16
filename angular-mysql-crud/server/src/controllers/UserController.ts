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
        const { idUser, isVendor, firsName, lastName } = req.body; //req.body req.query req.params
        const _usuarios: User[] = await UserService.listUser(idUser,  isVendor, firsName, lastName);
        res.json({length: _usuarios.length, recordset:_usuarios});
    }

    static async getUser (req: Request, res: Response){
        const { idUser } =  req.params; //req.body req.query req.params
        const _usuario: User[] = await UserService.getUser(parseInt(idUser));
        res.json({recordset:_usuario});
    }
    
    static async createUser (req: Request, res: Response) {
        let user: User = req.body;    
        const _createdUser=await UserService.createUser(user);   
        let suc;
        if (_createdUser.affectedRows < 1) {
            _createdUser.message = "user was not created";
            suc=false;
        }else{
            _createdUser.message = "user was created";
            suc=true;
        }
        res.json({success:suc,createdUser:_createdUser});
    }
    
    static async updateUser(req: Request, res: Response): Promise<void>{
        const { idUser } = req.params;
        let user: User = req.body;    
        const _updateUser=await UserService.updateUser(parseInt(idUser), user);  
        let suc;
        if (_updateUser.affectedRows < 1) {
            _updateUser.message='the user was not updated ';
            suc=false;
        }else{
            _updateUser.message='the user was updated ';
            suc=true;
        }
        res.json({success:suc,updateUser: _updateUser})
    }
    
    static async deleteUser(req: Request, res: Response): Promise<void>{
        const { idUser} = req.params;
        const _deleteUser=await UserService.deleteUser(parseInt(idUser));   
        let suc;
        if (_deleteUser.affectedRows < 1) {
            _deleteUser.message='the user was not deleted ';
            suc=false;
        }else{
            _deleteUser.message='the user was deleted ';
            suc=true;
        }
        res.json({success:suc,deleteUserUser: _deleteUser})
    }
}
