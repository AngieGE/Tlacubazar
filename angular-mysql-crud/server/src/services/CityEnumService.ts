import { CityEnum } from "../models";
import pool from "../database";

export class CityEnumService {
   
    static async listCityEnum(idCityEnum?:number, city?:string, fkStateEnum?:number): Promise<CityEnum[]>  {
        let sql: string = "SELECT * FROM cityEnum WHERE "
        sql += idCityEnum!=null ? "idCityEnum = " + idCityEnum + " AND " : "";
        sql += city!=null ? "city = '" + city + "' AND " : "";
        sql += fkStateEnum!=null ? "fkStateEnum = " + fkStateEnum + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getCityEnum(idCityEnum:number): Promise<CityEnum[]>  {
        let sql: string = "SELECT * FROM cityEnum WHERE "
        sql += idCityEnum!=null ? "idCityEnum = " + idCityEnum + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createCityEnum(CityEnum: CityEnum): Promise<any> {
        let sql: string = "INSERT INTO cityEnum (City, fkStateEnum) " + 
                           "VALUES ('"+ CityEnum.city + "', '" + 
                                        CityEnum.fkStateEnum + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateCityEnum(idCityEnum: number, cityEnum: CityEnum): Promise<any> {
        let sql: string = "UPDATE cityEnum SET " +
                                "city = '" + cityEnum.city+ "', " + 
                                "fkStateEnum = '" + cityEnum.fkStateEnum+ "' " + 
                                "WHERE idCityEnum = " + idCityEnum + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteCityEnum(idCityEnum: number): Promise<any> {
        let sql: string = "DELETE FROM cityEnum WHERE idCityEnum = " + idCityEnum;
        const resultado= await pool.query(sql);
        return resultado;
    }

}