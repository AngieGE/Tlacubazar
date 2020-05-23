import { Request, Response } from 'express';
import pool from '../database';
import {OrderProductService} from '../services';
import {OrderProduct} from '../models';

export class OrderProductController {

    static async listOrderProduct (req: Request, res: Response){
        const { idOrderProduct, fkUser, fkProduct} = req.query; //req.body req.query req.params
        const _orderProduct: OrderProduct[] = await OrderProductService.listOrderProduct(idOrderProduct, fkUser, fkProduct);
        res.json({length: _orderProduct.length, recordset:_orderProduct});
    }

    static async getOrderProduct (req: Request, res: Response){
        const { idOrderProduct } = req.query; //req.body req.query req.params
        const _orderProduct: OrderProduct[] = await OrderProductService.getOrderProduct(parseInt(idOrderProduct));
        res.json({length: _orderProduct.length, recordset:_orderProduct});
    }
    
    static async createOrderProduct (req: Request, res: Response) {
        let orderProduct: OrderProduct = req.body;    
        const _createdOrderProduct=await OrderProductService.createOrderProduct(orderProduct);  
        let suc;
        if (_createdOrderProduct.affectedRows < 1) {
            _createdOrderProduct.message = "OrderProduct was not created";
            suc=false;
        }else{
            _createdOrderProduct.message = "OrderProduct was created";
            suc=true;
        }
        res.json({success: suc,createdOrderProduct:_createdOrderProduct});
    }
    
    static async updateOrderProduct(req: Request, res: Response): Promise<void>{
        const { idOrderProduct} = req.params;
        let orderProduct: OrderProduct = req.body;    
        const _updateOrderProduct=await OrderProductService.updateOrderProduct(parseInt(idOrderProduct), orderProduct);  
        let suc;
        if (_updateOrderProduct.affectedRows < 1) {
            _updateOrderProduct.message='the OrderProduct was not updated ';
            suc=false;
        }else{
            _updateOrderProduct.message='the OrderProduct was updated ';
            suc=true;
        }
        res.json({success: suc, updateOrderProduct: _updateOrderProduct})
    }
    
    static async deleteOrderProduct(req: Request, res: Response): Promise<void>{
        const { idOrderProduct} = req.params;
        const _deleteOrderProduct=await OrderProductService.deleteOrderProduct(parseInt(idOrderProduct));  
        let suc; 
        if (_deleteOrderProduct.affectedRows < 1) {
            _deleteOrderProduct.message='the OrderProduct was not deleted ';
            suc=false;
        }else{
            _deleteOrderProduct.message='the OrderProduct was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteOrderProduct: _deleteOrderProduct})
    }
}
