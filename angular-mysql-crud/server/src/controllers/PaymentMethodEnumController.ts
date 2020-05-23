import { Request, Response } from 'express';
import pool from '../database';
import {PaymentMethodEnumService} from '../services';
import {PaymentMethodEnum} from '../models';

export class PaymentMethodController {

    static async listPaymentMethodEnum (req: Request, res: Response){
        const { idPaymentMethodEnum, paymentMethod } = req.body; //req.body req.query req.params
        const _PaymentMethods: PaymentMethodEnum[] = await PaymentMethodEnumService.listPaymentMethodEnum(idPaymentMethodEnum, paymentMethod);
        res.json({length: _PaymentMethods.length, recordset:_PaymentMethods});
    }
    
    static async createPaymentMethodEnum  (req: Request, res: Response) {
        let paymentMethodEnum: PaymentMethodEnum = req.body;    
        const _createdPaymentMethod=await PaymentMethodEnumService.createPaymentMethodEnum(paymentMethodEnum);  
        let suc;
        if (_createdPaymentMethod.affectedRows < 1) {
            _createdPaymentMethod.message = "PaymentMethod was not created";
            suc=false;
        }else{
            _createdPaymentMethod.message = "PaymentMethod was created";
            suc=true;
        }
        res.json({success: suc,createdPaymentMethodEnum:_createdPaymentMethod});
    }
    
    static async deletePaymentMethodEnum (req: Request, res: Response): Promise<void>{
        const {  fkPaymentMethodEnum } = req.params;
        const _deletePaymentMethod=await PaymentMethodEnumService.deletePaymentMethodEnum( parseInt(fkPaymentMethodEnum));  
        let suc; 
        if (_deletePaymentMethod.affectedRows < 1) {
            _deletePaymentMethod.message='the PaymentMethod was not deleted ';
            suc=false;
        }else{
            _deletePaymentMethod.message='the PaymentMethod was deleted ';
            suc=true;
        }
        res.json({success:suc, deletePaymentMethod: _deletePaymentMethod})
    }
}
