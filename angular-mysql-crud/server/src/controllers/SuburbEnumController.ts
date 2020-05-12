import { Request, Response } from 'express';
import pool from '../database';
import {SuburbEnumService} from '../services';
import {SuburbEnum} from '../models';

export class SuburbEnumController {

    static async listSuburbEnum (req: Request, res: Response){
        const { idSuburbEnum, suburb, postalCode, fkCityEnum } = req.body; //req.body req.query req.params
        const _suburbsEnum: SuburbEnum[] = await SuburbEnumService.listSuburbEnum(idSuburbEnum, suburb, postalCode, fkCityEnum);
        res.json({length: _suburbsEnum.length, recordset:_suburbsEnum});
    }

    static async getSuburbEnum (req: Request, res: Response){
        const { idSuburbEnum} = req.params; //req.body req.query req.params
        const _suburbsEnum: SuburbEnum[] = await SuburbEnumService.getSuburbEnum(parseInt(idSuburbEnum));
        res.json({length: _suburbsEnum.length, recordset:_suburbsEnum});
    }
    
    static async createSuburbEnum (req: Request, res: Response) {
        let suburbEnum: SuburbEnum = req.body;    
        const _createdSuburbEnum=await SuburbEnumService.createSuburbEnum(suburbEnum);  
        let suc;
        if (_createdSuburbEnum.affectedRows < 1) {
            _createdSuburbEnum.message = "SuburbEnum was not created";
            suc=false;
        }else{
            _createdSuburbEnum.message = "SuburbEnum was created";
            suc=true;
        }
        res.json({success: suc,createdSuburbEnum:_createdSuburbEnum});
    }
    
    static async updateSuburbEnum(req: Request, res: Response): Promise<void>{
        const { idSuburbEnum} = req.params;
        let suburbEnum: SuburbEnum = req.body;    
        const _updateSuburbEnum=await SuburbEnumService.updateSuburbEnum(parseInt(idSuburbEnum), suburbEnum);  
        let suc;
        if (_updateSuburbEnum.affectedRows < 1) {
            _updateSuburbEnum.message='the SuburbEnum was not updated ';
            suc=false;
        }else{
            _updateSuburbEnum.message='the SuburbEnum was updated ';
            suc=true;
        }
        res.json({success: suc, updateSuburbEnum: _updateSuburbEnum})
    }
    
    static async deleteSuburbEnum(req: Request, res: Response): Promise<void>{
        const { idSuburbEnum} = req.params;
        const _deleteSuburbEnum=await SuburbEnumService.deleteSuburbEnum(parseInt(idSuburbEnum));  
        let suc; 
        if (_deleteSuburbEnum.affectedRows < 1) {
            _deleteSuburbEnum.message='the SuburbEnum was not deleted ';
            suc=false;
        }else{
            _deleteSuburbEnum.message='the SuburbEnum was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteSuburbEnum: _deleteSuburbEnum})
    }
}
