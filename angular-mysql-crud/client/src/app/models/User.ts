export class User {

  idUser?: number;
  email?: string;
  firstName?:	string;
  lastName?: string;
  password?: string;
  isVendor?: number;
  phone?: string;
  cacaoBalance?: number;


  constructor(user?: User) {
    if (user != null) {
      this.idUser = user.idUser;
      this.email = user.email;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.password = user.password;
      this.isVendor = user.isVendor;
      this.phone = user.phone;
      this.cacaoBalance = user.cacaoBalance;
    }
  }
}
