import { Request, Response } from 'express';
import pool from '../database';
import {OrderService} from '../services';
import {Order} from '../models';

export class OrderController {

    static async listOrder (req: Request, res: Response){
        const { idOrder, fkStatusEnum,  fkUser} = req.query; //req.body req.query req.params
        const _Order: Order[] = await OrderService.listOrder(idOrder, fkStatusEnum, fkUser);
        res.json({length: _Order.length, recordset:_Order});
    }

    static async getOrder (req: Request, res: Response){
        const { idOrder } = req.query; //req.body req.query req.params
        const _Order: Order[] = await OrderService.getOrder(parseInt(idOrder));
        res.json({length: _Order.length, recordset:_Order});
    }
    
    static async createOrder (req: Request, res: Response) {
        let order: Order = req.body;    
        const _createdOrder=await OrderService.createOrder(order);  
        let suc;
        if (_createdOrder.affectedRows < 1) {
            _createdOrder.message = "Order was not created";
            suc=false;
        }else{
            _createdOrder.message = "Order was created";
            suc=true;
        }
        res.json({success: suc,createdOrder:_createdOrder});
    }
    
    static async updateOrder(req: Request, res: Response): Promise<void>{
        const { idOrder} = req.params;
        let order: Order = req.body;    
        const _updateOrder=await OrderService.updateOrder(parseInt(idOrder), order);  
        let suc;
        if (_updateOrder.affectedRows < 1) {
            _updateOrder.message='the Order was not updated ';
            suc=false;
        }else{
            _updateOrder.message='the Order was updated ';
            suc=true;
        }
        res.json({success: suc, updateOrder: _updateOrder})
    }
    
    static async deleteOrder(req: Request, res: Response): Promise<void>{
        const { idOrder} = req.params;
        const _deleteOrder=await OrderService.deleteOrder(parseInt(idOrder));  
        let suc; 
        if (_deleteOrder.affectedRows < 1) {
            _deleteOrder.message='the Order was not deleted ';
            suc=false;
        }else{
            _deleteOrder.message='the Order was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteOrder: _deleteOrder})
    }
}
