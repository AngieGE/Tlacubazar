export class SuburbEnum {
    idSuburbEnum?:number;
    suburb?:number;
    postalCode?:number;
    fkCityEnum?:number;
    constructor(suburbEnum:SuburbEnum){
        this.idSuburbEnum=suburbEnum.idSuburbEnum;
        this.suburb=suburbEnum.suburb;
        this.postalCode=suburbEnum.postalCode;
        this.fkCityEnum=suburbEnum.fkCityEnum;
    }
}