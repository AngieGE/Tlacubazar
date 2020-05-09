import { AddressEnum } from "../models";
import pool from "../database";

export class AddressEnumService {
   
    static async listAddressEnum(idAddressEnum?:number, address?:string): Promise<AddressEnum[]>  {
        let sql: string = "SELECT * FROM addressEnum WHERE "
        sql += idAddressEnum!=null ? "idAddressEnum = " + idAddressEnum + " AND " : "";
        sql += address!=null ? "address = '" + address + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }
    
    static async getAddressEnum(idAddressEnum:number): Promise<AddressEnum[]>  {
        let sql: string = "SELECT * FROM addressEnum WHERE "
        sql += idAddressEnum!=null ? "idAddressEnum = " + idAddressEnum + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createAddressEnum(addressEnum: AddressEnum): Promise<any> {
        let sql: string = "INSERT INTO addressEnum (address) " + 
                                "VALUES ('"+ addressEnum.address + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateAddressEnum(idAddressEnum: number, addressEnum: AddressEnum): Promise<any> {
        let sql: string = "UPDATE addressEnum SET " +
                                "address = '" + addressEnum.address+ " " +
                                "WHERE idAddressEnum = " + idAddressEnum + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteAddressEnum(idAddressEnum: number): Promise<any> {
        let sql: string = "DELETE FROM addressEnum WHERE idAddressEnum = " + idAddressEnum;
        const resultado= await pool.query(sql);
        return resultado;
    }

}