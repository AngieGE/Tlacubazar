import { StateEnum } from "../models";
import pool from "../database";

export class StateEnumService {
   
    static async listStateEnum(idStateEnum?:number, state?:string): Promise<StateEnum[]>  {
        let sql: string = "SELECT * FROM stateEnum WHERE "
        sql += idStateEnum!=null ? "idStateEnum = " + idStateEnum + " AND " : "";
        sql += state!=null ? "state = '" + state + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async createStateEnum(stateEnum: StateEnum): Promise<any> {
        let sql: string = "INSERT INTO stateEnum (state) " + 
                           "VALUES ('"+ stateEnum.state + "');"
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateStateEnum(idStateEnum: number, stateEnum: StateEnum): Promise<any> {
        let sql: string = "UPDATE stateEnum SET " +
                                "State = '" + stateEnum.state+  "' " + 
                                "WHERE idStateEnum = " + idStateEnum + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteStateEnum(idStateEnum: number): Promise<any> {
        let sql: string = "DELETE FROM stateEnum WHERE idStateEnum = " + idStateEnum;
        const resultado= await pool.query(sql);
        return resultado;
    }

}