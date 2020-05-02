export class UserAddress {
    fkUser?:number;
    fkAddress?:number;
    constructor(userAddress:UserAddress){
        this.fkUser=userAddress.fkUser;
        this.fkAddress=userAddress.fkAddress;
    }

}