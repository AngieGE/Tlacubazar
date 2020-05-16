import { Address } from './Address';

export class AddressEnum {
    idAddressEnum?: number;
    address?: string;

    // has many
    completeAddress: Address;

    constructor(addressEnum?: AddressEnum){
      if (addressEnum != null) {
        this.idAddressEnum = addressEnum.idAddressEnum;
        this.address = addressEnum.address;
      }
    }
}
