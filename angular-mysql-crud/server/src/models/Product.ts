export class Product {
    idProduct?: number;
    name?:string;
    description?:string;
    quantityInStock?:number;
    metric?: string;
    buyPrice?:number;
    maxCacaoBuyPrice?:number;
    fkStore?:number;
    fkCategoryEnum?: number;

    constructor(product: Product){
        this.idProduct=product.idProduct;
        this.name=product.name
        this.description=product.description;
        this.quantityInStock=product.quantityInStock;
        this.metric=product.metric;
        this.buyPrice=product.buyPrice;
        this.maxCacaoBuyPrice=product.maxCacaoBuyPrice;
        this.fkStore=product.fkStore;
        this.fkCategoryEnum=product.fkCategoryEnum;

    }


}