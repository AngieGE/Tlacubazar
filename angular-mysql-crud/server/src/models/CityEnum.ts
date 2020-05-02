export class CityEnum {
    idCityEnum?: number;
    city?: string;
    fkStateEnum?:number;

    constructor(cityEnum: CityEnum){
        this.idCityEnum=cityEnum.idCityEnum;
        this.city=cityEnum.city;
        this.fkStateEnum=cityEnum.fkStateEnum;
    }
}