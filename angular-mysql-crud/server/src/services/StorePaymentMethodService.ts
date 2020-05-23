import { StorePaymentMethod } from "../models";
import pool from "../database";

export class StorePaymentMethodService {
   
    static async listStorePaymentMethod(fkStore?:number, fkPaymentMethodEnum?:number): Promise<StorePaymentMethod[]>  {
        let sql: string = "SELECT * FROM storePaymentMethod WHERE "
        sql += fkStore!=null ? "fkStore = " + fkStore + " AND " : "";
        sql += fkPaymentMethodEnum!=null ? "fkPaymentMethodEnum = '" + fkPaymentMethodEnum + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }


    static async createStorePaymentMethod(storePaymentMethod: StorePaymentMethod): Promise<any> {
        let sql: string = "INSERT INTO storePaymentMethod (fkStore, fkPaymentMethodEnum) " + 
                           "VALUES ('"+ storePaymentMethod.fkStore + "', '" + 
                                        storePaymentMethod.fkPaymentMethodEnum + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteStorePaymentMethod(fkStore?:number, fkPaymentMethodEnum?:number): Promise<any> {
        let sql: string = "DELETE FROM storePaymentMethod WHERE fkStore = " + fkStore + " AND fkPaymentMethodEnum = " + fkPaymentMethodEnum + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

}