import { Payment } from "../models";
import pool from "../database";

export class PaymentService {
   
    static async listPayment(idPayment?:number, fkClient?:number, fkVendor?:number, fkOrder?:number): Promise<Payment[]>  {
        let sql: string = "SELECT * FROM payment WHERE "
        sql += idPayment!=null ? "idPayment = " + idPayment + " AND " : "";
        sql += fkClient!=null ? "fkClient = '" + fkClient + "' AND " : "";
        sql += fkVendor!=null ? "fkVendor = " + fkVendor + " AND " : "";
        sql += fkOrder!=null ? "fkOrder = " + fkOrder + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getPayment(idPayment:number): Promise<Payment[]>  {
        let sql: string = "SELECT * FROM payment WHERE "
        sql += idPayment!=null ? "idPayment = " + idPayment + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createPayment(payment: Payment): Promise<any> {
        let sql: string = "INSERT INTO payment (paymentDate, amount, cacaoAmount, fkClient, fkVendor, fkOrder) " + 
                           "VALUES ('"+ payment.paymentDate?.toISOString() + "', '" + 
                                        payment.amount + "', "+
                                        payment.cacaoAmount+", "+
                                        payment.fkClient+", "+
                                        payment.fkVendor+", "+
                                        payment.fkOrder+");"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updatePayment(idPayment: number, payment: Payment): Promise<any> {
        let sql: string = "UPDATE payment SET " +
                                "paymentDate = '" + payment.paymentDate?.toISOString()+ "', " + 
                                "amount = " + payment.amount+ " " +
                                "cacaoAmount = " + payment.cacaoAmount+ " " +
                                "fkClient = " + payment.fkClient+ " " +
                                "fkVendor = " + payment.fkVendor+ " " +
                                "fkOrder = " + payment.fkOrder+ " " + 
                                "WHERE idPayment = " + idPayment + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deletePayment(idPayment: number): Promise<any> {
        let sql: string = "DELETE FROM payment WHERE idPayment = " + idPayment;
        const resultado= await pool.query(sql);
        return resultado;
    }

}