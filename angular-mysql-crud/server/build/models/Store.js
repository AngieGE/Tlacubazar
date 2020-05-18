"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(store) {
        this.idStore = store.idStore;
        this.name = store.name;
        this.description = store.description;
        this.phone = store.phone;
        this.link = store.link;
        this.fkAddress = store.fkAddress;
        this.isServiceStore = store.isServiceStore;
        this.acceptsCacao = store.acceptsCacao;
        this.fkStatusEnum = store.fkStatusEnum;
        this.fkVendor = store.fkVendor;
        this.fkCategoryEnum = store.fkCategoryEnum;
    }
}
exports.Store = Store;
