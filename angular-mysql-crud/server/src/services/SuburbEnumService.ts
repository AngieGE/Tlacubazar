import { SuburbEnum } from "../models";
import pool from "../database";

export class SuburbEnumService {
   
    static async listSuburbEnum(idSuburbEnum?:number, suburb?:string, postalCode?:number, fkCityEnum?:number): Promise<SuburbEnum[]>  {
        let sql: string = "SELECT * FROM suburbEnum WHERE "
        sql += idSuburbEnum!=null ? "idSuburbEnum = " + idSuburbEnum + " AND " : "";
        sql += suburb!=null ? "suburb = '" + suburb + "' AND " : "";
        sql += postalCode!=null ? "postalCode = " + postalCode + " AND " : "";
        sql += fkCityEnum!=null ? "fkCityEnum = " + fkCityEnum + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getSuburbEnum(idSuburbEnum:number): Promise<SuburbEnum[]>  {
        let sql: string = "SELECT * FROM suburbEnum WHERE "
        sql += idSuburbEnum!=null ? "idSuburbEnum = " + idSuburbEnum + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createSuburbEnum(suburbEnum: SuburbEnum): Promise<any> {
        let sql: string = "INSERT INTO suburbEnum (suburb, postalCode, fkCityEnum) " + 
                           "VALUES ('"+ suburbEnum.suburb + "', " + 
                                        suburbEnum.postalCode + ", " + 
                                        suburbEnum.fkCityEnum + ");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateSuburbEnum(idSuburbEnum: number, suburbEnum: SuburbEnum): Promise<any> {
        let sql: string = "UPDATE suburbEnum SET " +
                                "suburb = '" + suburbEnum.suburb+ "', " + 
                                "postalCode = '" + suburbEnum.postalCode+ "', " + 
                                "fkCityEnum = '" + suburbEnum.fkCityEnum+ "' " + 
                                "WHERE idSuburbEnum = " + idSuburbEnum + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteSuburbEnum(idSuburbEnum: number): Promise<any> {
        let sql: string = "DELETE FROM suburbEnum WHERE idSuburbEnum = " + idSuburbEnum;
        const resultado= await pool.query(sql);
        return resultado;
    }

}