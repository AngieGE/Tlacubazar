import { Address } from "../models";
import pool from "../database";

export class AddressService {
   
    static async listAddress( idAddress?:number, fkAddressEnum?:number, fkStateEnum?:number, fkCityEnum?:number, fkSuburbEnum?:number): Promise<Address[]>  {
        let sql: string = "SELECT * FROM address WHERE "
        sql += idAddress!=null ? "idAddress = " + idAddress + " AND " : "";
        sql += fkAddressEnum!=null ? "fkAddressEnum = " + fkAddressEnum + " AND " : "";
        sql += fkStateEnum!=null ? "fkStateEnum = " + fkStateEnum + " AND " : "";
        sql += fkCityEnum!=null ? "fkCityEnum = " + fkCityEnum + " AND " : "";
        sql += fkSuburbEnum!=null ? "fkSuburbEnum = " + fkSuburbEnum + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getAddress(idAddress?:number): Promise<Address[]>  {
        let sql: string = "SELECT * FROM address WHERE "
        sql += idAddress!=null ? "idAddress = " + idAddress + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createAddress(address: Address): Promise<any> {
        let sql: string = "INSERT INTO address (fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum) " + 
                                "VALUES ('"+ address.fkAddressEnum + "', '" + 
                                            address.fkStateEnum +"', '" + 
                                            address.fkCityEnum + "', '" + 
                                            address.fkSuburbEnum + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateAddress(idAddress: number, address: Address): Promise<any> {
        let sql: string = "UPDATE address SET " +
                                "fkAddressEnum = '" + address.fkAddressEnum+"', " +  
                                "fkStateEnum = '" + address.fkStateEnum + "', " +
                                "fkCityEnum = '" + address.fkCityEnum +"', " + 
                                "fkSuburbEnum = " + address.fkSuburbEnum + " " +
                                "WHERE idAddress = " + idAddress + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteAddress(idAddress: number): Promise<any> {
        let sql: string = "DELETE FROM address WHERE idAddress = " + idAddress;
        const resultado= await pool.query(sql);
        return resultado;
    }

}