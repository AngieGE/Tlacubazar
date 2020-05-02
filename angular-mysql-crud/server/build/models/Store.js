"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Store;
(function (_Store) {
    _Store.Status = {
        EN_ESPERA: 'EN_ESPERA',
        ACEPTADA: 'ACEPTADA',
        RECHAZADA: 'RECHAZADA',
    };
})(_Store = exports._Store || (exports._Store = {}));
class Store {
    constructor(store) {
        this.idStore = store.idStore;
        this.name = store.name;
        this.fkAddress = store.fkAddress;
        this.isServiceStore = store.isServiceStore;
        this.acceptsCacao = store.acceptsCacao;
        this.status = store.status;
        this.fkVendor = store.fkVendor;
    }
}
exports.Store = Store;
