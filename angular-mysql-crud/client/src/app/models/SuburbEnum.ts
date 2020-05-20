import { CityEnum } from './CityEnum';

export class SuburbEnum {
    idSuburbEnum?: number;
    suburb?: number;
    postalCode?: number;
    fkCityEnum?: number;

    // has
    cityEnum: CityEnum = new CityEnum();

    constructor(suburbEnum?: SuburbEnum) {
      if (suburbEnum != null) {
        this.idSuburbEnum = suburbEnum.idSuburbEnum;
        this.suburb = suburbEnum.suburb;
        this.postalCode = suburbEnum.postalCode;
        this.fkCityEnum = suburbEnum.fkCityEnum;
      }
    }
}
