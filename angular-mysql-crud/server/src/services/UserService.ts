import { User } from "../models";
import pool from "../database";

export class UserService {

    static async login(userName: string, password: string): Promise<User>{
        let sql = "SELECT * FROM user WHERE userName = '" + userName + "' AND password = '" + password + "';";
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async listUser(idUser: number,firstName?: string, lastName?: string, userName?: string, isVendo?:boolean): Promise<User[]>  {
        let sql: string = "SELECT * FROM user WHERE "
        sql += firstName!=null ? "userName = '" + userName + "' AND " : "";
        sql += lastName!=null ? "lastName = '" + lastName + "' AND " : "";
        sql += userName!=null ? "userName = '" + userName + "' AND " : "";
        sql += isVendo!=null ? "isVendo = '" + isVendo + "' AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async createUser(user: User): Promise<any> {
        let sql: string = "INSERT INTO user (firstName, lastName, userName, password, isVendor, phone, cacaoBalance) " + 
                                "VALUES ('"+ user.firstName + "', '" + 
                                            user.lastName +"', '" + 
                                            user.userName + "', '" + 
                                            user.password + "', '" + 
                                            user.isVendor + "', '" + 
                                            user.phone + "', '" + 
                                            user.cacaoBalance + "');"
        const resultado= await pool.query(sql);
        return resultado.recordset[0].id;
    }

    static async updateUser(idUser: number, user: User): Promise<any> {
        let sql: string = "UPDATE user SET" +
                                "firstName = '" + user.firstName + "', " +
                                "lastName = '" + user.lastName +"', '" + 
                                "userName = '" + user.userName +"', '" +  
                                "password = '" + user.password +"', '" +  
                                "isVendor = '" + user.isVendor +"', '" +  
                                "phone = '" + user.phone +"', '" +  
                                "cacaoBalance = '" + user.cacaoBalance + "' " +
                                "WHERE idUser = " + idUser + ";";
        const resultado= await pool.query(sql);
        return resultado.recordset[0].id;
    }

    static async deleteUser(idUser: number): Promise<any> {
        let sql: string = "DELETE FROM user WHERE idUser = " + idUser;
        const resultado= await pool.query(sql);
        return resultado;
    }


}