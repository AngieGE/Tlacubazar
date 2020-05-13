
export class Store {
    idStore?:number;
    name?:string;
    description?: string;
    fkAddress?:number;
    isServiceStore?:number;
    acceptsCacao?:number;
    fkStatusEnum?:number;
    fkVendor?:number;
    fkCategoryEnum?: number;
    constructor(store:Store){
        this.idStore=store.idStore;
        this.name=store.name;
        this.description=store.description;
        this.fkAddress=store.fkAddress;
        this.isServiceStore=store.isServiceStore;
        this.acceptsCacao=store.acceptsCacao;
        this.fkStatusEnum=store.fkStatusEnum;
        this.fkVendor=store.fkVendor;
        this.fkCategoryEnum=store.fkCategoryEnum;
    }
}
