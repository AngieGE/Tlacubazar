import { OrderDetails, Order } from "../models";
import pool from "../database";

export class OrderDetailsService {
   
    static async listOrderDetails(idOrderDetails?:number, quantityOrdered?:number, fkOrder?:number, fkProduct?:number): Promise<OrderDetails[]>  {
        let sql: string = "SELECT * FROM OrderDetails WHERE "
        sql += idOrderDetails!=null ? "idOrderDetails = " + idOrderDetails + " AND " : "";
        sql += quantityOrdered!=null ? "quantityOrdered = " + quantityOrdered + " AND " : "";
        sql += fkOrder!=null ? "fkOrder = " + fkOrder + " AND " : "";
        sql += fkProduct!=null ? "fkProduct = " + fkProduct + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getOrderDetails(idOrderDetails:number): Promise<OrderDetails[]>  {
        let sql: string = "SELECT * FROM OrderDetails WHERE "
        sql += idOrderDetails!=null ? "idOrderDetails = " + idOrderDetails + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createOrderDetails(orderDetails: OrderDetails): Promise<any> {
        let sql: string = "INSERT INTO OrderDetails (quantityOrdered, fkOrdered, fkProduct) " + 
                           "VALUES ('"+ orderDetails.quantityOrdered + "', '" + 
                                        orderDetails.fkOrder + "', " +
                                        orderDetails.fkProduct +");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateOrderDetails(idOrderDetails:number , orderDetails: OrderDetails): Promise<any> {
        let sql: string = "UPDATE OrderDetails SET " +
                                "quantityOrdered = '" + orderDetails.quantityOrdered + "', " + 
                                "fkOrder = '" + orderDetails.fkOrder + "' " +
                                "fkProduct = '" + orderDetails.fkProduct+ "' " + 
                                "WHERE idOrderDetails = " + idOrderDetails + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteOrderDetails(idOrderDetails: number): Promise<any> {
        let sql: string = "DELETE FROM OrderDetails WHERE idOrderDetails = " + idOrderDetails;
        const resultado= await pool.query(sql);
        return resultado;
    }

}