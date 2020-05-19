import { User, Address} from './index';

export class UserAddress {
    fkUser?: number;
    fkAddress?: number;
    // has
    user: User;
    address: Address;
    constructor(userAddress?: UserAddress) {
      if (userAddress != null) {
        this.fkUser = userAddress.fkUser;
        this.fkAddress = userAddress.fkAddress;
      }
    }

}
