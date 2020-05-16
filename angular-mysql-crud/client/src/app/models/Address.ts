import { AddressEnum, StateEnum, CityEnum, SuburbEnum } from './index';

export class Address {
    idAddress?: number;
    fkAddressEnum?: number;
    fkStateEnum?: number;
    fkCityEnum?: number;
    fkSuburbEnum?: number;

    // has
    addressEnum: AddressEnum;
    stateEnum: StateEnum;
    cityEnum: CityEnum;
    suburbEnum: SuburbEnum;

    constructor(address?: Address) {
      if (address != null) {
        this.idAddress = address.idAddress;
        this.fkAddressEnum = address.fkAddressEnum;
        this.fkStateEnum = address.fkStateEnum;
        this.fkCityEnum = address.fkCityEnum;
        this.fkSuburbEnum = address.fkSuburbEnum;
      }
    }
}
