import { OrderProduct, Order } from "../models";
import pool from "../database";

export class OrderProductService {
   
    static async listOrderProduct(idOrderProduct?:number, fkUser?:number, fkProduct?:number): Promise<OrderProduct[]>  {
        let sql: string = "SELECT * FROM orderProduct WHERE "
        sql += idOrderProduct!=null ? "idOrderProduct = " + idOrderProduct + " AND " : "";
        sql += fkUser!=null ? "fkUser = " + fkUser + " AND " : "";
        sql += fkProduct!=null ? "fkProduct = " + fkProduct + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getOrderProduct(idOrderProduct:number): Promise<OrderProduct[]>  {
        let sql: string = "SELECT * FROM orderProduct WHERE "
        sql += idOrderProduct!=null ? "idOrderProduct = " + idOrderProduct + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createOrderProduct(orderProduct: OrderProduct): Promise<any> {
        let sql: string = "INSERT INTO orderProduct (cacaoAmount, c, fkUser, fkProduct) " + 
                           "VALUES ('"+ orderProduct.cacaoAmount + "', '" + 
                                        orderProduct.amount + "', " +
                                        orderProduct.fkUser + "', " +
                                        orderProduct.fkProduct +");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateOrderProduct(idOrderProduct:number , orderProduct: OrderProduct): Promise<any> {
        let sql: string = "UPDATE orderProduct SET " +
                                "cacaoAmount = '" + orderProduct.cacaoAmount + "', " + 
                                "amount = '" + orderProduct.amount + "' " +
                                "date = '" + orderProduct.date+ "' " + 
                                "fkUser = '" + orderProduct.fkUser+ "' " + 
                                "fkProduct = '" + orderProduct.fkProduct+ "' " + 
                                "WHERE idOrderProduct = " + idOrderProduct + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteOrderProduct(idOrderProduct: number): Promise<any> {
        let sql: string = "DELETE FROM orderProduct WHERE idOrderProduct = " + idOrderProduct;
        const resultado= await pool.query(sql);
        return resultado;
    }

}