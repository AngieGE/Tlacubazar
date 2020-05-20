import { User} from './User';
import { Address} from './Address';

export class UserAddress {
    fkUser?: number;
    fkAddress?: number;
    // has
    user?: User;
    address?: Address = new Address();
    constructor(userAddress?: UserAddress) {
      if (userAddress != null) {
        this.fkUser = userAddress.fkUser;
        this.fkAddress = userAddress.fkAddress;
      }
    }

}
