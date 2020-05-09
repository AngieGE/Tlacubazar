import { Request, Response } from 'express';
import pool from '../database';
import {UserAddressService} from '../services';
import {UserAddress} from '../models';

export class UserAddressController {

    static async listUserAddress (req: Request, res: Response){
        const { fkUser, fkAddress} = req.body; //req.body req.query req.params
        const _UserAddress: UserAddress[] = await UserAddressService.listUserAddress(fkUser, fkAddress);
        res.json({"length": _UserAddress.length, "recordset":_UserAddress});
    }
    
    static async getUserAddress (req: Request, res: Response){
        const { idUserAddress} = req.params; //req.body req.query req.params
        const _UserAddress: UserAddress[] = await UserAddressService.getUserAddress(parseInt(idUserAddress));
        res.json({"length": _UserAddress.length, "recordset":_UserAddress});
    }
    
    static async createUserAddress (req: Request, res: Response) {
        let userAddress: UserAddress = req.body;    
        const _createdUserAddress=await UserAddressService.createUserAddress(userAddress);  
        let suc;
        if (_createdUserAddress.affectedRows < 1) {
            _createdUserAddress.message = "UserAddress was not created";
            suc=false;
        }else{
            _createdUserAddress.message = "UserAddress was created";
            suc=true;
        }
        res.json({success: suc,createdUserAddress:_createdUserAddress});
    }
    
    static async deleteUserAddress(req: Request, res: Response): Promise<void>{
        const { fkUser, fkAddress} = req.params;
        const _deleteUserAddress=await UserAddressService.deleteUserAddress(fkUser, fkAddress);  
        let suc; 
        if (_deleteUserAddress.affectedRows < 1) {
            _deleteUserAddress.message='the UserAddress was not deleted ';
            suc=false;
        }else{
            _deleteUserAddress.message='the UserAddress was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteUserAddress: _deleteUserAddress})
    }
}
