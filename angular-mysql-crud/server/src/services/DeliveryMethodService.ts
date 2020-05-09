import { DeliveryMethod } from "../models";
import pool from "../database";

export class DeliveryMethodService {
   
    static async listDeliveryMethod(fkStore?:number, fkDeliveryMethodEnum?:number): Promise<DeliveryMethod[]>  {
        let sql: string = "SELECT * FROM DeliveryMethod WHERE "
        sql += fkStore!=null ? "fkStore = " + fkStore + " AND " : "";
        sql += fkDeliveryMethodEnum!=null ? "fkDeliveryMethodEnum = '" + fkDeliveryMethodEnum + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }


    static async createDeliveryMethod(deliveryMethod: DeliveryMethod): Promise<any> {
        let sql: string = "INSERT INTO DeliveryMethod (fkStore, fkDeliveryMethodEnum) " + 
                           "VALUES ('"+ deliveryMethod.fkStore + "', '" + 
                                        deliveryMethod.fkDeliveryMethodEnum + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteDeliveryMethod(fkStore?:number, fkDeliveryMethodEnum?:number): Promise<any> {
        let sql: string = "DELETE FROM DeliveryMethod WHERE fkStore = " + fkStore + " AND fkDeliveryMethodEnum = " + fkDeliveryMethodEnum + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

}