import { Request, Response } from 'express';
import pool from '../database';
import {StateEnumService} from '../services';
import {StateEnum} from '../models';

export class StateEnumController {

    static async listStateEnum (req: Request, res: Response){
        const { idStateEnum, state } = req.body; //req.body req.query req.params
        const _statesEnum: StateEnum[] = await StateEnumService.listStateEnum(idStateEnum, state);
        res.json({"length": _statesEnum.length, "recordset":_statesEnum});
    }
    
    static async getStateEnum (req: Request, res: Response){
        const { idStateEnum} = req.params; //req.body req.query req.params
        const _statesEnum: StateEnum[] = await StateEnumService.getStateEnum(parseInt(idStateEnum));
        res.json({"length": _statesEnum.length, "recordset":_statesEnum});
    }
    
    static async createStateEnum (req: Request, res: Response) {
        let stateEnum: StateEnum = req.body;    
        const _createdStateEnum=await StateEnumService.createStateEnum(stateEnum);  
        let suc;
        if (_createdStateEnum.affectedRows < 1) {
            _createdStateEnum.message = "StateEnum was not created";
            suc=false;
        }else{
            _createdStateEnum.message = "StateEnum was created";
            suc=true;
        }
        res.json({success: suc,createdStateEnum:_createdStateEnum});
    }
    
    static async updateStateEnum(req: Request, res: Response): Promise<void>{
        const { idStateEnum} = req.params;
        let stateEnum: StateEnum = req.body;    
        const _updateStateEnum=await StateEnumService.updateStateEnum(parseInt(idStateEnum), stateEnum);  
        let suc;
        if (_updateStateEnum.affectedRows < 1) {
            _updateStateEnum.message='the StateEnum was not updated ';
            suc=false;
        }else{
            _updateStateEnum.message='the StateEnum was updated ';
            suc=true;
        }
        res.json({success: suc, updateStateEnum: _updateStateEnum})
    }
    
    static async deleteStateEnum(req: Request, res: Response): Promise<void>{
        const { idStateEnum} = req.params;
        const _deleteStateEnum=await StateEnumService.deleteStateEnum(parseInt(idStateEnum));  
        let suc; 
        if (_deleteStateEnum.affectedRows < 1) {
            _deleteStateEnum.message='the StateEnum was not deleted ';
            suc=false;
        }else{
            _deleteStateEnum.message='the StateEnum was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteStateEnum: _deleteStateEnum})
    }
}
