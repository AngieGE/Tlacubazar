//import {Address} from './';

export class User {

    idUser?: number;
    firstName?:	string;
    lastName?: string;
    userName?: string;
    password?: string;
    isVendor?: boolean;
    phone?:string;
    cacaoBalance?: number;

    // Has many
    //address?: Address[]

    // Belongs to 

    constructor(user: User) {
        this.idUser=user.idUser;
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.userName=user.userName;
        this.password=user.password;
        this.isVendor=user.isVendor;
        this.phone=user.phone;
        this.cacaoBalance=user.cacaoBalance;
    }
}