import { Request, Response } from 'express';
import pool from '../database';
import {ProductService} from '../services';
import {Product} from '../models';

export class ProductController {

    static async listProduct (req: Request, res: Response){
        const { name, fkStore, fkCategoryEnum} = req.query; //req.body req.query req.params
        const _Product: Product[] = await ProductService.listProduct(name, fkStore, fkCategoryEnum);
        res.json({length: _Product.length, recordset:_Product});
    }
    
    static async getProduct (req: Request, res: Response){
        const { idProduct} = req.params; //req.body req.query req.params
        const _Product: Product[] = await ProductService.getProduct(parseInt(idProduct));
        res.json({length: _Product.length, recordset:_Product});
    }
    
    static async createProduct (req: Request, res: Response) {
        let product: Product = req.body;    
        const _createdProduct=await ProductService.createProduct(product);  
        let suc;
        if (_createdProduct.affectedRows < 1) {
            _createdProduct.message = "Product was not created";
            suc=false;
        }else{
            _createdProduct.message = "Product was created";
            suc=true;
        }
        res.json({success: suc,createdProduct:_createdProduct});
    }
    
    static async updateProduct(req: Request, res: Response): Promise<void>{
        const { idProduct} = req.params;
        let product: Product = req.body;    
        const _updateProduct=await ProductService.updateProduct(parseInt(idProduct), product);  
        let suc;
        if (_updateProduct.affectedRows < 1) {
            _updateProduct.message='the Product was not updated ';
            suc=false;
        }else{
            _updateProduct.message='the Product was updated ';
            suc=true;
        }
        res.json({success: suc, updateProduct: _updateProduct})
    }
    
    static async deleteProduct(req: Request, res: Response): Promise<void>{
        const { idProduct} = req.params;
        const _deleteProduct=await ProductService.deleteProduct(parseInt(idProduct));  
        let suc; 
        if (_deleteProduct.affectedRows < 1) {
            _deleteProduct.message='the Product was not deleted ';
            suc=false;
        }else{
            _deleteProduct.message='the Product was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteProduct: _deleteProduct})
    }
}
