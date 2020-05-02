"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // Has many
    // Belongs to 
    constructor(user) {
        this.idUser = user.idUser;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.password = user.password;
        this.isVendor = user.isVendor;
        this.phone = user.phone;
        this.cacaoBalance = user.cacaoBalance;
    }
}
exports.User = User;
