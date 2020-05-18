import { Request, Response } from 'express';
import pool from '../database';
import {PaymentService} from '../services';
import {Payment} from '../models';

export class PaymentController {

    static async listPayment (req: Request, res: Response){
        const { idPayment, fkClient, fkVendor, fkOrder} = req.query; //req.body req.query req.params
        const _payment: Payment[] = await PaymentService.listPayment(idPayment, fkClient, fkVendor, fkOrder);
        res.json({length: _payment.length, recordset:_payment});
    }
    
    static async getPayment (req: Request, res: Response){
        const { idPayment} = req.query; //req.body req.query req.params
        const _payment: Payment[] = await PaymentService.getPayment(parseInt(idPayment));
        res.json({length: _payment.length, recordset:_payment});
    }
    
    static async createPayment (req: Request, res: Response) {
        let payment: Payment = req.body;    
        const _createdPayment=await PaymentService.createPayment(payment);  
        let suc;
        if (_createdPayment.affectedRows < 1) {
            _createdPayment.message = "Payment was not created";
            suc=false;
        }else{
            _createdPayment.message = "Payment was created";
            suc=true;
        }
        res.json({success: suc,createdPayment:_createdPayment});
    }
    
    static async updatePayment(req: Request, res: Response): Promise<void>{
        const { idPayment} = req.params;
        let payment: Payment = req.body;    
        const _updatePayment=await PaymentService.updatePayment(parseInt(idPayment), payment);  
        let suc;
        if (_updatePayment.affectedRows < 1) {
            _updatePayment.message='the Payment was not updated ';
            suc=false;
        }else{
            _updatePayment.message='the Payment was updated ';
            suc=true;
        }
        res.json({success: suc, updatePayment: _updatePayment})
    }
    
    static async deletePayment(req: Request, res: Response): Promise<void>{
        const { idPayment} = req.params;
        const _deletePayment=await PaymentService.deletePayment(parseInt(idPayment));  
        let suc; 
        if (_deletePayment.affectedRows < 1) {
            _deletePayment.message='the Payment was not deleted ';
            suc=false;
        }else{
            _deletePayment.message='the Payment was deleted ';
            suc=true;
        }
        res.json({success:suc, deletePayment: _deletePayment})
    }
}
