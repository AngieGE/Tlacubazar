import { Request, Response } from 'express';
import pool from '../database';
import {AddressService} from '../services';
import {Address} from '../models';

export class AddressController {

    static async listAddress (req: Request, res: Response){
        const { idAddress, fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum } = req.body; //req.body req.query req.params
        const _addresses: Address[] = await AddressService.listAddress(idAddress, fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum);
        res.json({"length": _addresses.length, "recordset":_addresses});
    }
    
    static async createAddress (req: Request, res: Response) {
        let address: Address = req.body;    
        const _createdAddress=await AddressService.createAddress(address);  
        let suc;
        if (_createdAddress.affectedRows < 1) {
            _createdAddress.message = "address was not created";
            suc=false;
        }else{
            _createdAddress.message = "address was created";
            suc=true;
        }
        res.json({success: suc,createdAddress:_createdAddress});
    }
    
    static async updateAddress(req: Request, res: Response): Promise<void>{
        const { idAddress} = req.params;
        let address: Address = req.body;    
        const _updateAddress=await AddressService.updateAddress(parseInt(idAddress), address);  
        let suc;
        if (_updateAddress.affectedRows < 1) {
            _updateAddress.message='the Address was not updated ';
            suc=false;
        }else{
            _updateAddress.message='the Address was updated ';
            suc=true;
        }
        res.json({success: suc, updateAddress: _updateAddress})
    }
    
    static async deleteAddress(req: Request, res: Response): Promise<void>{
        const { idAddress} = req.params;
        const _deleteAddress=await AddressService.deleteAddress(parseInt(idAddress));  
        let suc; 
        if (_deleteAddress.affectedRows < 1) {
            _deleteAddress.message='the Address was not deleted ';
            suc=false;
        }else{
            _deleteAddress.message='the Address was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteAddress: _deleteAddress})
    }
}
