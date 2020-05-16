import { StoreReview } from "../models";
import pool from "../database";

export class StoreReviewService {
   
    static async listStoreReview(fkStore?:number, fkUser?:number): Promise<StoreReview[]>  {
        let sql: string = "SELECT * FROM storeReview WHERE "
        sql += fkStore!=null ? "fkStore = '" + fkStore + "' AND " : "";
        sql += fkUser!=null ? "fkUser = " + fkUser + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getStoreReview(idStoreReview:number): Promise<StoreReview[]>  {
        let sql: string = "SELECT * FROM storeReview WHERE "
        sql += idStoreReview!=null ? "idStoreReview = " + idStoreReview + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createStoreReview(storeReview: StoreReview): Promise<any> {
        let sql: string = "INSERT INTO StoreReview (stars, review, fkStore, fkUser ) " + 
                           "VALUES ('"+ storeReview.stars + "', '" + 
                                        storeReview.review + "', "+
                                        storeReview.fkStore+", "+
                                        storeReview.fkUser+");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateStoreReview(idStoreReview: number, storeReview: StoreReview): Promise<any> {
        let sql: string = "UPDATE storeReview SET " +
                                "stars = '" + storeReview.stars+ "', " + 
                                "review = " + storeReview.review+ " " +
                                "fkStore = " + storeReview.fkStore+ " " +
                                "fkUser = " + storeReview.fkUser+ " " + 
                                "WHERE idStoreReview = " + idStoreReview + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteStoreReview(idStoreReview: number): Promise<any> {
        let sql: string = "DELETE FROM storeReview WHERE idStoreReview = " + idStoreReview;
        const resultado= await pool.query(sql);
        return resultado;
    }

}