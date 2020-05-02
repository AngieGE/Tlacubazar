export namespace _Store {
    export type Status = 'EN_ESPERA' | 'ACEPTADA' | 'RECHAZADA';
    export const Status = {
        EN_ESPERA: 'EN_ESPERA' as Status,
        ACEPTADA: 'ACEPTADA' as Status,
        RECHAZADA: 'RECHAZADA' as Status,
    };

}

export class Store {
    idStore?:number;
    name?:string;
    fkAddress?:number;
    isServiceStore?:number;
    acceptsCacao?:number;
    status?:_Store.Status;
    fkVendor?:number;
    constructor(store:Store){
        this.idStore=store.idStore;
        this.name=store.name;
        this.fkAddress=store.fkAddress;
        this.isServiceStore=store.isServiceStore;
        this.acceptsCacao=store.acceptsCacao;
        this.status=store.status;
        this.fkVendor=store.fkVendor;
    }
}
