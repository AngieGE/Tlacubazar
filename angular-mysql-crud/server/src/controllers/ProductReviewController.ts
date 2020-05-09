import { Request, Response } from 'express';
import pool from '../database';
import {ProductReviewService} from '../services';
import {ProductReview} from '../models';

export class ProductReviewController {

    static async listProductReview (req: Request, res: Response){
        const { idProductReview, fkProduct, fkUser} = req.body; //req.body req.query req.params
        const _ProductReview: ProductReview[] = await ProductReviewService.listProductReview(idProductReview, fkProduct, fkUser);
        res.json({"length": _ProductReview.length, "recordset":_ProductReview});
    }
    
    static async getProductReview (req: Request, res: Response){
        const { idProductReview} = req.params; //req.body req.query req.params
        const _ProductReview: ProductReview[] = await ProductReviewService.getProductReview(parseInt(idProductReview));
        res.json({"length": _ProductReview.length, "recordset":_ProductReview});
    }
    
    static async createProductReview (req: Request, res: Response) {
        let productReview: ProductReview = req.body;    
        const _createdProductReview=await ProductReviewService.createProductReview(productReview);  
        let suc;
        if (_createdProductReview.affectedRows < 1) {
            _createdProductReview.message = "ProductReview was not created";
            suc=false;
        }else{
            _createdProductReview.message = "ProductReview was created";
            suc=true;
        }
        res.json({success: suc,createdProductReview:_createdProductReview});
    }
    
    static async updateProductReview(req: Request, res: Response): Promise<void>{
        const { idProductReview} = req.params;
        let productReview: ProductReview = req.body;    
        const _updateProductReview=await ProductReviewService.updateProductReview(parseInt(idProductReview), productReview);  
        let suc;
        if (_updateProductReview.affectedRows < 1) {
            _updateProductReview.message='the ProductReview was not updated ';
            suc=false;
        }else{
            _updateProductReview.message='the ProductReview was updated ';
            suc=true;
        }
        res.json({success: suc, updateProductReview: _updateProductReview})
    }
    
    static async deleteProductReview(req: Request, res: Response): Promise<void>{
        const { idProductReview} = req.params;
        const _deleteProductReview=await ProductReviewService.deleteProductReview(parseInt(idProductReview));  
        let suc; 
        if (_deleteProductReview.affectedRows < 1) {
            _deleteProductReview.message='the ProductReview was not deleted ';
            suc=false;
        }else{
            _deleteProductReview.message='the ProductReview was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteProductReview: _deleteProductReview})
    }
}
