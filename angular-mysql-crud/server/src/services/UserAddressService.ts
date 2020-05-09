import { UserAddress } from "../models";
import pool from "../database";

export class UserAddressService {
   
    static async listUserAddress(fkUser?:number, fkAddress?:number): Promise<UserAddress[]>  {
        let sql: string = "SELECT * FROM userAddress WHERE "
        sql += fkUser!=null ? "fkUser = " + fkUser + " AND " : "";
        sql += fkAddress!=null ? "fkAddress = '" + fkAddress + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }


    static async createUserAddress(userAddress: UserAddress): Promise<any> {
        let sql: string = "INSERT INTO UserAddress (fkUser, fkAddress) " + 
                           "VALUES ('"+ userAddress.fkUser + "', '" + 
                                        userAddress.fkAddress + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteUserAddress(fkUser?:number, fkAddress?:number): Promise<any> {
        let sql: string = "DELETE FROM userAddress WHERE fkUser = " + fkUser + " AND fkAddress = " + fkAddress + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

}