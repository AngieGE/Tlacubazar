import { StateEnum } from './StateEnum';

export class CityEnum {
    idCityEnum?: number;
    city?: string;
    fkStateEnum?: number;

    // has
    stateEnum: StateEnum;

    constructor(cityEnum?: CityEnum) {
      if (cityEnum != null) {
        this.idCityEnum = cityEnum.idCityEnum;
        this.city = cityEnum.city;
        this.fkStateEnum = cityEnum.fkStateEnum;
      }
    }
}
