

export class Address {
    idAddress?: number;
    fkAddressEnum?: number;
    //fkPostalCodeEnum?: number;
    fkStateEnum?: number;
    fkCityEnum?: number;
    fkSuburbEnum?: number;

    constructor(address: Address){
        this.idAddress = address.idAddress;
        this.fkAddressEnum= address.fkAddressEnum;
        //this.fkPostalCodeEnum= address.fkPostalCodeEnum;
        this.fkStateEnum= address.fkStateEnum;
        this.fkCityEnum= address.fkCityEnum;
        this.fkSuburbEnum= address.fkSuburbEnum;
    }

}