import { Request, Response } from 'express';
import pool from '../database';
import {CategoryEnumService} from '../services';
import {CategoryEnum} from '../models';

export class CategoryEnumController {

    static async listCategoryEnum (req: Request, res: Response){
        const { idCategoryEnum, category } = req.query; //req.body req.query req.params
        const _CategorysEnum: CategoryEnum[] = await CategoryEnumService.listCategoryEnum(idCategoryEnum, category);
        res.json({length: _CategorysEnum.length, recordset:_CategorysEnum});
    }
    
}
