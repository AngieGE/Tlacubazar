import { Request, Response } from 'express';
import pool from '../database';
import {CityEnumService} from '../services';
import {CityEnum} from '../models';

export class CityEnumController {

    static async listCityEnum (req: Request, res: Response){
        const { idCityEnum, city, fkStateEnum } = req.query; //req.body req.query req.params
        const _citiesEnum: CityEnum[] = await CityEnumService.listCityEnum(idCityEnum, city, fkStateEnum);
        res.json({length: _citiesEnum.length, recordset:_citiesEnum});
    }

    static async getCityEnum (req: Request, res: Response){
        const { idCityEnum } = req.params; //req.body req.query req.params
        const _citiesEnum: CityEnum[] = await CityEnumService.getCityEnum(parseInt(idCityEnum));
        res.json({length: _citiesEnum.length, recordset:_citiesEnum});
    }
    
    static async createCityEnum (req: Request, res: Response) {
        let cityEnum: CityEnum = req.body;    
        const _createdCityEnum=await CityEnumService.createCityEnum(cityEnum);  
        let suc;
        if (_createdCityEnum.affectedRows < 1) {
            _createdCityEnum.message = "CityEnum was not created";
            suc=false;
        }else{
            _createdCityEnum.message = "CityEnum was created";
            suc=true;
        }
        res.json({success: suc,createdCityEnum:_createdCityEnum});
    }
    
    static async updateCityEnum(req: Request, res: Response): Promise<void>{
        const { idCityEnum} = req.params;
        let cityEnum: CityEnum = req.body;    
        const _updateCityEnum=await CityEnumService.updateCityEnum(parseInt(idCityEnum), cityEnum);  
        let suc;
        if (_updateCityEnum.affectedRows < 1) {
            _updateCityEnum.message='the CityEnum was not updated ';
            suc=false;
        }else{
            _updateCityEnum.message='the CityEnum was updated ';
            suc=true;
        }
        res.json({success: suc, updateCityEnum: _updateCityEnum})
    }
    
    static async deleteCityEnum(req: Request, res: Response): Promise<void>{
        const { idCityEnum} = req.params;
        const _deleteCityEnum=await CityEnumService.deleteCityEnum(parseInt(idCityEnum));  
        let suc; 
        if (_deleteCityEnum.affectedRows < 1) {
            _deleteCityEnum.message='the CityEnum was not deleted ';
            suc=false;
        }else{
            _deleteCityEnum.message='the CityEnum was deleted ';
            suc=true;
        }
        res.json({success:suc, deleteCityEnum: _deleteCityEnum})
    }
}
