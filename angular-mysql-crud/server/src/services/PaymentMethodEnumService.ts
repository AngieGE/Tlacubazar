import { PaymentMethodEnum } from "../models";
import pool from "../database";

export class PaymentMethodEnumService {
   
    static async listPaymentMethodEnum(idPaymentMethodEnum?:number, paymentMethod?:string): Promise<PaymentMethodEnum[]>  {
        let sql: string = "SELECT * FROM PaymentMethodEnum WHERE "
        sql += idPaymentMethodEnum!=null ? "idPaymentMethodEnum = " + idPaymentMethodEnum + " AND " : "";
        sql += paymentMethod!=null ? "paymentMethod = '" + paymentMethod + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }


    static async createPaymentMethodEnum(paymentMethodEnum: PaymentMethodEnum): Promise<any> {
        let sql: string = "INSERT INTO paymentMethodEnum ( paymentMethod) " + 
                           "VALUES ('"+ paymentMethodEnum.paymentMethod + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deletePaymentMethodEnum(idPaymentMethodEnum?:number): Promise<any> {
        let sql: string = "DELETE FROM paymentMethodEnum WHERE idPaymentMethodEnum = " + idPaymentMethodEnum +";";
        const resultado= await pool.query(sql);
        return resultado;
    }

}