import { ProductReview } from "../models";
import pool from "../database";

export class ProductReviewService {
   
    static async listProductReview(fkProduct?:number, fkUser?:number): Promise<ProductReview[]>  {
        let sql: string = "SELECT * FROM productReview WHERE "
        sql += fkProduct!=null ? "fkProduct = '" + fkProduct + "' AND " : "";
        sql += fkUser!=null ? "fkUser = " + fkUser + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getProductReview(idProductReview:number): Promise<ProductReview[]>  {
        let sql: string = "SELECT * FROM productReview WHERE "
        sql += idProductReview!=null ? "idProductReview = " + idProductReview + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createProductReview(productReview: ProductReview): Promise<any> {
        let sql: string = "INSERT INTO productReview (stars, review, fkProduct, fkUser ) " + 
                           "VALUES ('"+ productReview.stars + "', '" + 
                                        productReview.review + "', "+
                                        productReview.fkProduct+", "+
                                        productReview.fkUser+");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateProductReview(idProductReview: number, productReview: ProductReview): Promise<any> {
        let sql: string = "UPDATE productReview SET " +
                                "stars = '" + productReview.stars+ "', " + 
                                "review = " + productReview.review+ " " +
                                "fkProduct = " + productReview.fkProduct+ " " +
                                "fkUser = " + productReview.fkUser+ " " + 
                                "WHERE idProductReview = " + idProductReview + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteProductReview(idProductReview: number): Promise<any> {
        let sql: string = "DELETE FROM productReview WHERE idProductReview = " + idProductReview;
        const resultado= await pool.query(sql);
        return resultado;
    }

}