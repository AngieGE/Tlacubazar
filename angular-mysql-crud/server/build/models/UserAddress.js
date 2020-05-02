"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAddress {
    constructor(userAddress) {
        this.fkUser = userAddress.fkUser;
        this.fkAddress = userAddress.fkAddress;
    }
}
exports.UserAddress = UserAddress;
