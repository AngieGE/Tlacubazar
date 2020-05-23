import { Order } from "../models";
import pool from "../database";

export class OrderService {
    //params are wrong
   
    static async listOrder(idOrder?:number, fkUser?:number,fkStore?:number, fkStatusEnum?:number, ): Promise<Order[]>  {
        let sql: string ="SELECT * FROM `order` WHERE " 
        sql += idOrder!=null ? "idOrder = " + idOrder + " AND " : "";
        sql += fkUser!=null ? "fkUser = " + fkUser + " AND " : "";
        sql += fkStore!=null ? "fkStore = " + fkStore + " AND " : "";
        sql += fkStatusEnum!=null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
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
        let sql: string = "INSERT INTO order ( fkUser, fkStore, fkStatusEnum, fkPaymentMethodEnum) VALUES ( "+
                                        order.fkUser + ", '" +
                                        order.fkStore + "', " +
                                        order.fkStatusEnum + ", " +
                                        order.fkPaymentMethodEnum +");"
                console.log(sql);
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateOrder(idOrder:number, order: Order): Promise<any> {
        let sql: string = "UPDATE Order SET " +
                                "orderDate = '" +new Date() + "', " + 
                                "comments = '" + order.comments+ "' " + 
                                "fkUser = '" + order.fkUser + "' " +
                                "fkStore = '" + order.fkStore+ "' " + 
                                "fkStatusEnum = '" + order.fkStatusEnum+ "' " + 
                                "fkPaymentMethodEnum = '" + order.fkPaymentMethodEnum+ "' " + 
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