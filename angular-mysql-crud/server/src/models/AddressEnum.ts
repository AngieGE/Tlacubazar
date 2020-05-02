export class AddressEnum {
    idAddressEnum?:number;
    address?:string;

    constructor(addressEnum: AddressEnum){
        this.idAddressEnum=addressEnum.idAddressEnum;
        this.address=addressEnum.address;
    }

}