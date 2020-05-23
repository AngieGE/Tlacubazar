import { Store } from "../models";
import pool from "../database";

export class StoreService {
   
    static async listStore(isServiceStore?:number, acceptsCacao?:number, fkStatusEnum?:number, fkVendor?:number, fkCategoryEnum?: number): Promise<Store[]>  {
        let sql: string = "SELECT * FROM store WHERE "
        sql += isServiceStore!=null ? "isServiceStore = " + isServiceStore + " AND " : "";
        sql += acceptsCacao!=null ? "acceptsCacao = " + acceptsCacao + " AND " : "";
        sql += fkStatusEnum!=null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
        sql += fkVendor!=null ? "fkVendor = " + fkVendor + " AND " : "";
        sql += fkCategoryEnum!=null ? "fkCategoryEnum = " + fkCategoryEnum + " AND " : "";
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
      let sql: string = "INSERT INTO store (name, description, phone, link, image, isServiceStore, acceptsCacao, fkAddress, fkStatusEnum, fkVendor, fkCategoryEnum) " + 
                                "VALUES ('"+ store.name + "', '" + 
                                            store.description +"', '" + 
                                            store.phone +"', '" + 
                                            store.link +"', '" + 
                                            store.image +"', '" + 
                                            store.isServiceStore + "', '" + 
                                            store.acceptsCacao + "', '" + 
                                            store.fkAddress +"', '" + 
                                            store.fkStatusEnum + "', '" + 
                                            store.fkVendor + "', '" + 
                                            store.fkCategoryEnum + "');"
                                            
        const resultado= await pool.query(sql);
        console.log(resultado);
        return resultado;
    }

    static async updateStore(idStore: number, store: Store): Promise<any> {
        let sql: string = "UPDATE store SET " +
                                "name = '" + store.name +"', " +  
                                "description = '" + store.description +"', " +  
                                "phone = '" + store.phone +"', " +  
                                "link = '" + store.link +"', " +  
                                "image = '" + store.image +"', " +  
                                "isServiceStore = '" + store.isServiceStore +"', " + 
                                "acceptsCacao = " + store.acceptsCacao +", " +  
                                "fkAddress = '" + store.fkAddress + "', " +
                                "fkStatusEnum = '" + store.fkStatusEnum +"', " +  
                                "fkVendor = " + store.fkVendor + ", " +
                                "fkCategoryEnum = " + store.fkCategoryEnum + " " +
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