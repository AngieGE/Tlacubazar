import { Order } from "../models";
import pool from "../database";

export class OrderService {
   
    static async listOrder(idOrder?:number, fkStatusEnum?:number, fkUser?:number): Promise<Order[]>  {
        let sql: string ="SELECT * FROM `order` WHERE " 
        sql += idOrder!=null ? "idOrder = " + idOrder + " AND " : "";
        sql += fkStatusEnum!=null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
        sql += fkUser!=null ? "fkUser = " + fkUser + " AND " : "";
        sql += "1 = 1; ";
        console.log("--------------------------------");
        console.log(sql)
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getOrder(idOrder:number): Promise<Order[]>  {
        let sql: string = "SELECT * FROM Order WHERE "
        sql += idOrder!=null ? "idOrder = " + idOrder + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createOrder(order: Order): Promise<any> {
        let sql: string = "INSERT INTO order ( fkStatusEnum, comments, totalPrice, totalMaxCacaoPrice, fkUser, fkProduct) VALUES ( "+
                                        order.fkStatusEnum + ", '" +
                                        order.comments + "', " +
                                        order.totalPrice + ", " +
                                        order.totalMaxCacaoPrice + ", " +
                                        order.fkUser + ", " +
                                        order.fkProduct +");"
                console.log(sql);
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateOrder(idOrder:number, order: Order): Promise<any> {
        let sql: string = "UPDATE Order SET " +
                                "orderDate = '" + order.orderDate?.toISOString() + "', " + 
                                "fkStatusEnum = '" + order.fkStatusEnum + "' " +
                                "comments = '" + order.comments+ "' " + 
                                "totalPrice = '" + order.totalPrice+ "' " + 
                                "totalMaxCacaoPrice = '" + order.totalMaxCacaoPrice+ "' " + 
                                "fkUser = '" + order.fkUser+ "' " + 
                                "WHERE idOrder = " + idOrder + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteOrder(idOrder: number): Promise<any> {
        let sql: string = "DELETE FROM Order WHERE idOrder = " + idOrder;
        const resultado= await pool.query(sql);
        return resultado;
    }

}