import { Request, Response } from 'express';
import pool from '../database';
import {StorePaymentMethodService} from '../services';
import {StorePaymentMethod} from '../models';

export class StorePaymentMethodController {

    static async listStorePaymentMethod (req: Request, res: Response){
        const { fkStore, fkPaymentMethodEnum} = req.query; //req.body req.query req.params
        const _StorePaymentMethod: StorePaymentMethod[] = await StorePaymentMethodService.listStorePaymentMethod(fkStore, fkPaymentMethodEnum);
        res.json({length: _StorePaymentMethod.length, recordset:_StorePaymentMethod});
    }
    
    static async createStorePaymentMethod (req: Request, res: Response) {
        let storePaymentMethod: StorePaymentMethod = req.body;    
        const _createdStorePaymentMethod=await StorePaymentMethodService.createStorePaymentMethod(storePaymentMethod);  
        let suc;
        if (_createdStorePaymentMethod.affectedRows < 1) {
            _createdStorePaymentMethod.message = "StorePaymentMethod was not created";
            suc=false;
        }else{
            _createdStorePaymentMethod.message = "StorePaymentMethod was created";
            suc=true;
        }
        res.json({success: suc,createdStorePaymentMethod:_createdStorePaymentMethod});
    }
    
    static async deleteStorePaymentMethod(req: Request, res: Response): Promise<void>{
        const { fkStore, fkPaymentMethodEnum} = req.params;
        console.log(req.params);
        const _deleteStorePaymentMethod=await StorePaymentMethodService.deleteStorePaymentMethod(parseInt(fkStore), parseInt(fkPaymentMethodEnum));  
        let suc; 
        if (_deleteStorePaymentMethod.affectedRows < 1) {
            _deleteStorePaymentMethod.message='the StorePaymentMethod was not deleted ';
            suc=false;
        }else{
            _deleteStorePaymentMethod.message='the StorePaymentMethod was deleted ';
            suc=true;
        }
        res.json({success:suc, deletedStorePaymentMethod: _deleteStorePaymentMethod})
    }
}
