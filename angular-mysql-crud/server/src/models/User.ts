//import {Address} from './';

export class User {

    idUser?: number;
    email?: string;
    firstName?:	string;
    lastName?: string;
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
        this.email=user.email;
        this.password=user.password;
        this.isVendor=user.isVendor;
        this.phone=user.phone;
        this.cacaoBalance=user.cacaoBalance;
    }
}