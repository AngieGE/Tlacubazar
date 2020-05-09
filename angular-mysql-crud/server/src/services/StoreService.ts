import { Store } from "../models";
import pool from "../database";

export class StoreService {
   
    static async listStore(idStore?:number, fkStatusEnum?: number, fkVendor?: number): Promise<Store[]>  {
        let sql: string = "SELECT * FROM store WHERE "
        sql += idStore!=null ? "idStore = " + idStore + " AND " : "";
        sql += fkStatusEnum!=null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
        sql += fkVendor!=null ? "fkVendor = " + fkVendor + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getStore(idStore:number): Promise<Store[]>  {
        let sql: string = "SELECT * FROM store WHERE "
        sql += idStore!=null ? "idStore = " + idStore + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createStore(store: Store): Promise<any> {
        let sql: string = "CALL createStoreProcedure( '"+
                            store.name + "', '" + 
                            store.fkAddress +"', '" + 
                            store.isServiceStore + "', '" + 
                            store.acceptsCacao + "', '" + 
                            store.fkStatusEnum + "', '" + 
                            store.fkVendor + "');"
      /*  
      let sql: string = "INSERT INTO store (name, fkAddress, isServiceStore, acceptsCacao, status, fkVendor) " + 
                                "VALUES ('"+ store.name + "', '" + 
                                            store.fkAddress +"', '" + 
                                            store.isServiceStore + "', '" + 
                                            store.acceptsCacao + "', '" + 
                                            store.status + "', '" + 
                                            store.fkVendor + "');"
                                            */
        const resultado= await pool.query(sql);
        console.log(resultado);
        return resultado;
    }

    static async updateStore(idStore: number, store: Store): Promise<any> {
        let sql: string = "UPDATE store SET " +
                                "name = '" + store.name +"', " +  
                                "fkAddress = '" + store.fkAddress + "', " +
                                "isServiceStore = '" + store.isServiceStore +"', " + 
                                "acceptsCacao = " + store.acceptsCacao +", " +  
                                "fkStatusEnum = '" + store.fkStatusEnum +"', " +  
                                "fkVendor = " + store.fkVendor + " " +
                                "WHERE idStore = " + idStore + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteStore(idStore: number): Promise<any> {
        let sql: string = "DELETE FROM store WHERE idStore = " + idStore;
        const resultado= await pool.query(sql);
        return resultado;
    }

}