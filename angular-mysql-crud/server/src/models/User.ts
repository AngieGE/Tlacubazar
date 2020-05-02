export class User {

    idUser?: number;
    email?: number;
    firstName?:	string;
    lastName?: string;
    password?: string;
    isVendor?: boolean;
    phone?:string;
    cacaoBalance?: number;

    // Has many

    // Belongs to 

    constructor(user: User) {
        this.idUser=user.idUser;
        this.email=user.email;
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.password=user.password;
        this.isVendor=user.isVendor;
        this.phone=user.phone;
        this.cacaoBalance=user.cacaoBalance;
    }
}