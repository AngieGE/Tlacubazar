import { Request, Response } from 'express';
import pool from '../database';
import {OrderDetailsService} from '../services';
import {OrderDetails} from '../models';

export class OrderDetailsController {

    static async listOrderDetails (req: Request, res: Response){
        const { idOrderDetails, quantityOrdered, fkOrder, fkProduct} = req.body; //req.body req.query req.params
        const _orderDetails: OrderDetails[] = await OrderDetailsService.listOrderDetails(idOrderDetails, quantityOrdered, fkOrder, fkProduct);
        res.json({"length": _orderDetails.length, "recordset":_orderDetails});
    }

    static async getOrderDetails (req: Request, res: Response){
        const { idOrderDetails } = req.params; //req.body req.query req.params
        const _orderDetails: OrderDetails[] = await OrderDetailsService.getOrderDetails(parseInt(idOrderDetails));
        res.json({"length": _orderDetails.length, "recordset":_orderDetails});
    }
    
    static async createOrderDetails (req: Request, res: Response) {
        let orderDetails: OrderDetails = req.body;    
        const _createdOrderDetails=await OrderDetailsService.createOrderDetails(orderDetails);  
        let suc;
        if (_createdOrderDetails.affectedRows < 1) {
            _createdOrderDetails.message = "OrderDetails was not created";
            suc=false;
        }else{
            _createdOrderDetails.message = "OrderDetails was created";
            suc=true;
        }
        res.json({success: suc,createdOrderDetails:_createdOrderDetails});
    }
    
    static async updateOrderDetails(req: Request, res: Response): Promise<void>{
        const { idOrderDetails} = req.params;
        let OrderDetails: OrderDetails = req.body;    
        const _updateOrderDetails=await OrderDetailsService.updateOrderDetails(parseInt(idOrderDetails), OrderDetails);  
        let suc;
        if (_updateOrderDetails.affectedRows < 1) {
            _updateOrderDetails.message='the OrderDetails was not updated ';
            suc=false;
        }else{
            _updateOrderDetails.message='the OrderDetails was updated ';
            suc=true;
        }
        res.json({success: suc, updateOrderDetails: _updateOrderDetails})
    }
    
    static async deleteOrderDetails(req: Request, res: Response): Promise<void>{
        const { idOrderDetails} = req.params;
        const _deleteOrderDetails=await OrderDetailsService.deleteOrderDetails(parseInt(idOrderDetails));  
        let suc; 
        if (_deleteOrderDetails.affectedRows < 1) {
            _deleteOrderDetails.message='the OrderDetails was not deleted ';
            suc=false;
        }else{
            _deleteOrderDetails.message='the OrderDetails was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteOrderDetails: _deleteOrderDetails})
    }
}
