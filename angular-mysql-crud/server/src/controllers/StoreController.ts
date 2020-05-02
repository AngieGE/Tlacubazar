import { Request, Response } from 'express';
import pool from '../database';
import {StoreService} from '../services';
import {Store} from '../models';

export class StoreController {

    static async listStore (req: Request, res: Response){
        const { idStore } = req.body; //req.body req.query req.params
        const _stores: Store[] = await StoreService.listStore(idStore);
        res.json({"length": _stores.length, "recordset":_stores});
    }
    
    static async createStore (req: Request, res: Response) {
        let user: Store = req.body;    
        const _createdStore=await StoreService.createStore(user);   
        res.json(_createdStore);
    }
    
    static async updateStore(req: Request, res: Response): Promise<void>{
        const { idStore } = req.params;
        let user: Store = req.body;    
        const _updateStore=await StoreService.updateStore(parseInt(idStore), user);  
        if (_updateStore.affectedRows < 1) {
            _updateStore.message='the store was not updated ';
        }else{
            _updateStore.message='the store was updated ';
        }
        res.json({updateUser: _updateStore})
    }
    
    static async deleteStore(req: Request, res: Response): Promise<void>{
        const { idStore} = req.params;
        const _deleteStore=await StoreService.deleteStore(parseInt(idStore));   
        if (_deleteStore.affectedRows < 1) {
            _deleteStore.message='the store was not deleted ';
        }else{
            _deleteStore.message='the store was deleted ';
        }
        res.json({deleteUserUser: _deleteStore})
    }
}
