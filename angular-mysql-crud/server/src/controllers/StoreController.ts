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

    static async getStore (req: Request, res: Response){
        const { idStore } = req.params; //req.body req.query req.params
        const _store: Store[] = await StoreService.listStore(parseInt(idStore));
        res.json({"length": _store.length, "recordset":_store});
    }
    
    static async createStore (req: Request, res: Response) {
        let user: Store = req.body;    
        const _createdStore=await StoreService.createStore(user);  
        let suc;
        if (_createdStore.affectedRows < 1) {
            _createdStore.message = "fkVendor or fkAddress does not exists";
            suc=false;
        }else{
            _createdStore.message = "store was created";
            suc=true;
        }
        res.json({success: suc,createdStore:_createdStore});
    }
    
    static async updateStore(req: Request, res: Response): Promise<void>{
        const { idStore } = req.params;
        let user: Store = req.body;    
        const _updateStore=await StoreService.updateStore(parseInt(idStore), user);  
        let suc;
        if (_updateStore.affectedRows < 1) {
            _updateStore.message='the store was not updated ';
            suc=false;
        }else{
            _updateStore.message='the store was updated ';
            suc=true;
        }
        res.json({success: suc, updateUser: _updateStore})
    }
    
    static async deleteStore(req: Request, res: Response): Promise<void>{
        const { idStore} = req.params;
        const _deleteStore=await StoreService.deleteStore(parseInt(idStore));  
        let suc; 
        if (_deleteStore.affectedRows < 1) {
            _deleteStore.message='the store was not deleted ';
            suc=false;
        }else{
            _deleteStore.message='the store was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteUserUser: _deleteStore})
    }
}
