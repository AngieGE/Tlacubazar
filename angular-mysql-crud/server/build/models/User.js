"use strict";
//import {Address} from './';
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // Has many
    //address?: Address[]
    // Belongs to 
    constructor(user) {
        this.idUser = user.idUser;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.userName = user.userName;
        this.password = user.password;
        this.isVendor = user.isVendor;
        this.phone = user.phone;
        this.cacaoBalance = user.cacaoBalance;
    }
}
exports.User = User;
