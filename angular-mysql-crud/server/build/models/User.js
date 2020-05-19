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
        this.isVendor = user.isVendor;
        this.phone = user.phone;
        this.cacaoBalance = user.cacaoBalance;
        this.readUserCourse = user.readUserCourse;
        this.readVendorCourse = user.readVendorCourse;
        this.fkAddress = user.fkAddress;
    }
}
exports.User = User;
