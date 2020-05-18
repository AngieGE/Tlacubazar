import { CategoryEnum } from "../models";
import pool from "../database";

export class CategoryEnumService {
   
    static async listCategoryEnum(idCategoryEnum?:number, category?:string): Promise<CategoryEnum[]>  {
        let sql: string = "SELECT * FROM categoryEnum WHERE "
        sql += idCategoryEnum!=null ? "idCategoryEnum = " + idCategoryEnum + " AND " : "";
        sql += category!=null ? "category = '" + category + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }
}