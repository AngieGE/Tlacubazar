import { Request, Response } from 'express';
import pool from '../database';
import {DeliveryMethodService} from '../services';
import {DeliveryMethod} from '../models';

export class DeliveryMethodController {

    static async listDeliveryMethod (req: Request, res: Response){
        const { fkStore, fkDeliveryMethodEnum } = req.body; //req.body req.query req.params
        const _deliveryMethods: DeliveryMethod[] = await DeliveryMethodService.listDeliveryMethod(fkStore, fkDeliveryMethodEnum);
        res.json({"length": _deliveryMethods.length, "recordset":_deliveryMethods});
    }
    
    static async createDeliveryMethod (req: Request, res: Response) {
        let deliveryMethod: DeliveryMethod = req.body;    
        const _createdDeliveryMethod=await DeliveryMethodService.createDeliveryMethod(deliveryMethod);  
        let suc;
        if (_createdDeliveryMethod.affectedRows < 1) {
            _createdDeliveryMethod.message = "DeliveryMethod was not created";
            suc=false;
        }else{
            _createdDeliveryMethod.message = "DeliveryMethod was created";
            suc=true;
        }
        res.json({success: suc,createdDeliveryMethod:_createdDeliveryMethod});
    }
    
    static async deleteDeliveryMethod(req: Request, res: Response): Promise<void>{
        const { fkStore, fkDeliveryMethodEnum } = req.params;
        const _deleteDeliveryMethod=await DeliveryMethodService.deleteDeliveryMethod(parseInt(fkStore), parseInt(fkDeliveryMethodEnum));  
        let suc; 
        if (_deleteDeliveryMethod.affectedRows < 1) {
            _deleteDeliveryMethod.message='the DeliveryMethod was not deleted ';
            suc=false;
        }else{
            _deleteDeliveryMethod.message='the DeliveryMethod was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteDeliveryMethod: _deleteDeliveryMethod})
    }
}
