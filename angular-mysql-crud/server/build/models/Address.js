"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(address) {
        this.idAddress = address.idAddress;
        this.fkAddressEnum = address.fkAddressEnum;
        this.fkStateEnum = address.fkStateEnum;
        this.fkCityEnum = address.fkCityEnum;
        this.fkSuburbEnum = address.fkSuburbEnum;
    }
}
exports.Address = Address;
