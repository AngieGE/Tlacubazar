
export class Store {
    idStore?:number;
    name?:string;
    description?: string;
    phone?: string;
    link?: string;
    image?: string;
    isServiceStore?:number;
    acceptsCacao?:number;
    fkAddress?:number;
    fkStatusEnum?:number;
    fkVendor?:number;
    fkCategoryEnum?: number;
    constructor(store:Store){
        this.idStore=store.idStore;
        this.name=store.name;
        this.description=store.description;
        this.phone=store.phone;
        this.link=store.link;
        this.image=store.image;
        this.isServiceStore=store.isServiceStore;
        this.acceptsCacao=store.acceptsCacao;
        this.fkAddress=store.fkAddress;
        this.fkStatusEnum=store.fkStatusEnum;
        this.fkVendor=store.fkVendor;
        this.fkCategoryEnum=store.fkCategoryEnum;
    }
}
