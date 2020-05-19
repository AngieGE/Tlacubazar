import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { Store, Address, UserAddress, AddressEnum,
         StateEnum, CityEnum, SuburbEnum } from 'src/app/models/index';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

/* angularx-social-login Componentes */
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // icons
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  // data
  user: User;
  socialUser: SocialUser;
  stores: Store[];
  userAddresses: UserAddress[];

  constructor(private authService: AuthService, private tlacu: TlacuServices) {
    // init vars
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
    this.stores = new Array();
    this.userAddresses = new Array();

    // get data
    this.getStoresByUser();
    this.getUserAddresses();
  }

  ngOnInit(): void {}

  async getStoresByUser() {
    const storesRes = await this.tlacu.store.listStore(null, null, null, 2, null).toPromise();
    if (storesRes.length <= 0) { return; }
    let storesTemp : Store[] = Array();
    storesRes.recordset.forEach(store => {
      storesTemp.push(store);
    });
    this.stores = storesTemp;
  }

  // -------------- ADDRESS ------------------
  async getUserAddresses() {
    let addressesTemp: UserAddress[] = new Array();
    const userAddressesRes = await this.tlacu.userAddress.listUserAddress(this.user.idUser).toPromise();
    if (userAddressesRes.length > 0 ) {
      console.log('hay direcciones');
      userAddressesRes.recordset.forEach( userAddress => {
        const userAdd = new UserAddress(userAddress);
        // set the address
        this.setAddress(userAdd);
        // push the address to temporary array
        addressesTemp.push(userAdd);
      });
      this.userAddresses = addressesTemp; // set addresses array
      console.log(this.userAddresses);
    }
  }

  setAddress(userAddress: UserAddress) {
    console.log('set address');
    this.tlacu.address.getAddress(userAddress.fkAddress).subscribe( res => {
      console.log( res);
      // set the address
      userAddress.address = new Address(res.recordset[0]);

      // set the address enum
      this.setAddressEnum(userAddress.address);

      // set the state enum //userAddress.address.stateEnum = res
      this.setStateEnum(userAddress.address);

      // set the city enum  //userAddress.address.cityEnum = res
      this.setCityEnum(userAddress.address);

      // set the suburb enum //userAddress.address.suburbEnum = res
      this.setSuburbEnum(userAddress.address);
    }, err => {console.log(err); });
  }

  setAddressEnum(address: Address) {
    console.log('set address enum');
    this.tlacu.adressEnum.getAddressEnum(address.fkAddressEnum).subscribe( res => {
      address.addressEnum = new AddressEnum(res.recordset[0]);
    });
  }

  setStateEnum(address: Address) {
    this.tlacu.stateEnum.getStateEnum(address.fkStateEnum).subscribe( res => {
      address.stateEnum = new StateEnum(res.recordset[0]);
    });
  }

  setCityEnum(address: Address) {
    this.tlacu.cityEnum.getCityEnum(address.fkCityEnum).subscribe( res => {
      address.cityEnum = new CityEnum(res.recordset[0]);
    });
  }

  setSuburbEnum(address: Address) {
    this.tlacu.suburbEnum.getSuburbEnum(address.fkSuburbEnum).subscribe( res => {
      address.suburbEnum = new SuburbEnum(res.recordset[0]);
    });
  }

// -------------- BUTTONS ------------------
  public editStore(idStore: number) {
    console.log('Editando tienda ' + idStore);
  }
  public deleteStore(idStore: number) {
    console.log('Eliminando tienda ' + idStore);
  }

  public editUserAddress(idAdress: number) {
    console.log('Editando user address ' + idAdress);
  }
  public deleteUserAddress(idAdress: number) {
    console.log('Eliminando user address' + idAdress);
  }
  editInfo() {

  }

}
