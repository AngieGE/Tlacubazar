import { Product } from "../models";
import pool from "../database";

export class ProductService {
   
    static async listProduct(idProduct?:number, fkStore?:number): Promise<Product[]>  {
        let sql: string = "SELECT * FROM Product WHERE "
        sql += idProduct!=null ? "idProduct = " + idProduct + " AND " : "";
        sql += fkStore!=null ? "fkStore = '" + fkStore + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getProduct(idProduct:number): Promise<Product[]>  {
        let sql: string = "SELECT * FROM product WHERE "
        sql += idProduct!=null ? "idProduct = " + idProduct + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createProduct(product: Product): Promise<any> {
        let sql: string = "INSERT INTO product (name, descripcion, quantityStock, buyPrice, maxCacaoBuyPrice, fkStore) " + 
                           "VALUES ('"+ product.name + "', '" + 
                                        product.description + "', "+
                                        product.quantityInStock+", "+
                                        product.buyPrice+", "+
                                        product.maxCacaoBuyPrice+", "+
                                        product.fkStore+");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateProduct(idProduct: number, product: Product): Promise<any> {
        let sql: string = "UPDATE product SET " +
                                "name = '" + product.name+ "', " + 
                                "description = " + product.description+ " " +
                                "quantityInStock = " + product.quantityInStock+ " " +
                                "buyPrice = " + product.buyPrice+ " " +
                                "maxCacaoBuyPrice = " + product.maxCacaoBuyPrice+ " " +
                                "fkStore = " + product.fkStore+ " " + 
                                "WHERE idProduct = " + idProduct + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteProduct(idProduct: number): Promise<any> {
        let sql: string = "DELETE FROM product WHERE idProduct = " + idProduct;
        const resultado= await pool.query(sql);
        return resultado;
    }

}