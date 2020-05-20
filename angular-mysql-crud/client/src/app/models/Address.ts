import { AddressEnum } from './AddressEnum';
import { StateEnum} from './StateEnum';
import { CityEnum } from './CityEnum';
import { SuburbEnum } from './SuburbEnum';

export class Address {
    idAddress?: number;
    fkAddressEnum?: number;
    fkStateEnum?: number;
    fkCityEnum?: number;
    fkSuburbEnum?: number;

    // has
    addressEnum?: AddressEnum = new AddressEnum();
    stateEnum?: StateEnum = new StateEnum();
    cityEnum?: CityEnum = new CityEnum();
    suburbEnum?: SuburbEnum = new SuburbEnum();

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
