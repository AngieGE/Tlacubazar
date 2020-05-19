import { Request, Response } from 'express';
import pool from '../database';
import {AddressEnumService} from '../services';
import {AddressEnum} from '../models';

export class AddressEnumController {

    static async listAddressEnum (req: Request, res: Response){
        const { idAddressEnum, address } = req.query; //req.body req.query req.params
        const _addressesEnum: AddressEnum[] = await AddressEnumService.listAddressEnum(idAddressEnum, address);
        res.json({length: _addressesEnum.length, recordset:_addressesEnum});
    }
    static async getAddressEnum (req: Request, res: Response){
        const { idAddressEnum } = req.params; //req.body req.query req.params
        const _addressesEnum: AddressEnum[] = await AddressEnumService.getAddressEnum(parseInt(idAddressEnum));
        res.json({length: _addressesEnum.length, recordset:_addressesEnum});
    }
    
    static async createAddressEnum (req: Request, res: Response) {
        let addressEnum: AddressEnum = req.body;    
        const _createdAddressEnum=await AddressEnumService.createAddressEnum(addressEnum);  
        let suc;
        if (_createdAddressEnum.affectedRows < 1) {
            _createdAddressEnum.message = "addressEnum was not created";
            suc=false;
        }else{
            _createdAddressEnum.message = "addressEnum was created";
            suc=true;
        }
        res.json({success: suc,createdAddressEnum:_createdAddressEnum});
    }
    
    static async updateAddressEnum(req: Request, res: Response): Promise<void>{
        const { idAddressEnum} = req.query;
        let addressEnum: AddressEnum = req.body;    
        const _updateAddressEnum=await AddressEnumService.updateAddressEnum(parseInt(idAddressEnum), addressEnum);  
        let suc;
        if (_updateAddressEnum.affectedRows < 1) {
            _updateAddressEnum.message='the AddressEnum was not updated ';
            suc=false;
        }else{
            _updateAddressEnum.message='the AddressEnum was updated ';
            suc=true;
        }
        res.json({success: suc, updateAddressEnum: _updateAddressEnum})
    }
    
    static async deleteAddressEnum(req: Request, res: Response): Promise<void>{
        const { idAddressEnum} = req.query;
        const _deleteAddressEnum=await AddressEnumService.deleteAddressEnum(parseInt(idAddressEnum));  
        let suc; 
        if (_deleteAddressEnum.affectedRows < 1) {
            _deleteAddressEnum.message='the AddressEnum was not deleted ';
            suc=false;
        }else{
            _deleteAddressEnum.message='the AddressEnum was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteAddressEnum: _deleteAddressEnum})
    }
}
