"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuburbEnum {
    constructor(suburbEnum) {
        this.idSuburbEnum = suburbEnum.idSuburbEnum;
        this.suburb = suburbEnum.suburb;
        this.postalCode = suburbEnum.postalCode;
        this.fkCityEnum = suburbEnum.fkCityEnum;
    }
}
exports.SuburbEnum = SuburbEnum;
