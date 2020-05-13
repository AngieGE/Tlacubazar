import { Product } from "../models";
import pool from "../database";

export class ProductService {
   
    static async listProduct(name?: string, fkStore?: number, fkCategoryEnum?:number): Promise<Product[]>  {
        let sql: string = "SELECT * FROM Product WHERE "
        sql += name!=null ? "name = " + name + " AND " : "";
        sql += fkStore!=null ? "fkStore = '" + fkStore + "' AND " : "";
        sql += fkCategoryEnum!=null ? "fkCategoryEnum = '" + fkCategoryEnum + "' AND " : "";
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
        let sql: string = "INSERT INTO product (name, descripcion, quantityStock, buyPrice, maxCacaoBuyPrice, fkStore, fkCategoryEnum) " + 
                           "VALUES ('"+ product.name + "', '" + 
                                        product.description + "', "+
                                        product.quantityInStock+", "+
                                        product.buyPrice+", "+
                                        product.maxCacaoBuyPrice+", "+
                                        product.fkStore+", "+
                                        product.fkCategoryEnum+");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateProduct(idProduct: number, product: Product): Promise<any> {
        let sql: string = "UPDATE product SET " +
                                "name = '" + product.name+ "', " + 
                                "description = " + product.description+ ", " +
                                "quantityInStock = " + product.quantityInStock+ ", " +
                                "buyPrice = " + product.buyPrice+ ", " +
                                "maxCacaoBuyPrice = " + product.maxCacaoBuyPrice + ", " +
                                "fkStore = " + product.fkStore+ ", " + 
                                "fkStore = " + product.fkCategoryEnum+ " " + 
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