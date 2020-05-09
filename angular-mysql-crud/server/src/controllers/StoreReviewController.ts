import { Request, Response } from 'express';
import pool from '../database';
import {StoreReviewService} from '../services';
import {StoreReview} from '../models';

export class StoreReviewController {

    static async listStoreReview (req: Request, res: Response){
        const { idStoreReview, fkStore, fkUser} = req.body; //req.body req.query req.params
        const _StoreReview: StoreReview[] = await StoreReviewService.listStoreReview(idStoreReview, fkStore, fkUser);
        res.json({"length": _StoreReview.length, "recordset":_StoreReview});
    }
    
    static async getStoreReview (req: Request, res: Response){
        const { idStoreReview} = req.params; //req.body req.query req.params
        const _StoreReview: StoreReview[] = await StoreReviewService.getStoreReview(parseInt(idStoreReview));
        res.json({"length": _StoreReview.length, "recordset":_StoreReview});
    }
    
    static async createStoreReview (req: Request, res: Response) {
        let storeReview: StoreReview = req.body;    
        const _createdStoreReview=await StoreReviewService.createStoreReview(storeReview);  
        let suc;
        if (_createdStoreReview.affectedRows < 1) {
            _createdStoreReview.message = "StoreReview was not created";
            suc=false;
        }else{
            _createdStoreReview.message = "StoreReview was created";
            suc=true;
        }
        res.json({success: suc,createdStoreReview:_createdStoreReview});
    }
    
    static async updateStoreReview(req: Request, res: Response): Promise<void>{
        const { idStoreReview} = req.params;
        let storeReview: StoreReview = req.body;    
        const _updateStoreReview=await StoreReviewService.updateStoreReview(parseInt(idStoreReview), storeReview);  
        let suc;
        if (_updateStoreReview.affectedRows < 1) {
            _updateStoreReview.message='the StoreReview was not updated ';
            suc=false;
        }else{
            _updateStoreReview.message='the StoreReview was updated ';
            suc=true;
        }
        res.json({success: suc, updateStoreReview: _updateStoreReview})
    }
    
    static async deleteStoreReview(req: Request, res: Response): Promise<void>{
        const { idStoreReview} = req.params;
        const _deleteStoreReview=await StoreReviewService.deleteStoreReview(parseInt(idStoreReview));  
        let suc; 
        if (_deleteStoreReview.affectedRows < 1) {
            _deleteStoreReview.message='the StoreReview was not deleted ';
            suc=false;
        }else{
            _deleteStoreReview.message='the StoreReview was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteStoreReview: _deleteStoreReview})
    }
}
