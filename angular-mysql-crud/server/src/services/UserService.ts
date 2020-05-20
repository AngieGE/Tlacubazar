import { User } from "../models";
import pool from "../database";

export class UserService {

    static async login(userName: string, password: string): Promise<User>{
        let sql = "SELECT * FROM user WHERE userName = '" + userName + "' AND password = '" + password + "';";
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async listUser(idUser?:number, isVendor?:number, firsName?:string, lastName?:string, email?: string): Promise<User[]>  {
        let sql: string = "SELECT * FROM user WHERE "
        sql += idUser!=null ? "idUser = " + idUser + " AND " : "";
        sql += isVendor!=null ? "isVendor = " + isVendor + " AND " : "";
        sql += firsName!=null ? "firsName = '" + firsName + "' AND " : "";
        sql += lastName!=null ? "lastName = '" + lastName + "' AND " : "";
        sql += email!=null ? "email = '" + email + "' AND " : "";
        sql += "1 = 1 ";
        console.log(email);
        console.log(sql);
        const recordset = await pool.query(sql);
        return recordset;
    }

    static async getUser(idUser?:number): Promise<User[]>  {
        let sql: string = "SELECT * FROM user WHERE "
        sql += idUser!=null ? "idUser = " + idUser + " AND " : "";
        sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset;
    }
    static async createUser(user: User): Promise<any> {
        let sql: string = "INSERT INTO user (email, firstName, lastName, isVendor, cacaoBalance) " + 
                                "VALUES ('"+ user.email + "', '" + 
                                            user.firstName +"', '" + 
                                            user.lastName + "', '" + 
                                            //user.password + "', '" + 
                                            user.isVendor + "', '" + 
                                            user.cacaoBalance + "');";
        console.log(sql);
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async updateUser(idUser: number, user: User): Promise<any> {
        let sql: string = "UPDATE user SET " +
                                "email = '" + user.email +"', " +  
                                "firstName = '" + user.firstName + "', " +
                                "lastName = '" + user.lastName +"', " + 
                                "isVendor = " + user.isVendor +", " +  
                                "phone = '" + user.phone +"', " +  
                                "cacaoBalance = " + user.cacaoBalance + ", " +
                                "readUserCourse = " + user.readUserCourse + ", " +
                                "readVendorCourse = " + user.readVendorCourse + ", " +
                                "fkAddress = " + user.fkAddress + " " +
                                "WHERE idUser = " + idUser + ";";
        const resultado= await pool.query(sql);
        return resultado;
    }

    static async deleteUser(idUser: number): Promise<any> {
        let sql: string = "DELETE FROM user WHERE idUser = " + idUser;
        const resultado= await pool.query(sql);
        return resultado;
    }


}