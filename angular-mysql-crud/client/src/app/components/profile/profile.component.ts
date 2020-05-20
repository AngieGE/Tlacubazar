import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { Store, Address, UserAddress, AddressEnum,
         StateEnum, CityEnum, SuburbEnum } from 'src/app/models/index';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  styleUrls: ['./profile.component.css'],
  providers: [NgbModalConfig, NgbModal]
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

  // address
  selectedState;
  selectedCity;
  selectedSuburb;
  stateArray: StateEnum[];
  cityArray: CityEnum[];
  suburbArray: SuburbEnum[];
  cp: number;

  constructor(private authService: AuthService, private tlacu: TlacuServices,
              private modalService: NgbModal, private config: NgbModalConfig) {
    // init vars
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
    this.stores = new Array();
    this.userAddresses = new Array();
    this.selectedState = null;
    this.selectedCity = null;
    this.selectedSuburb = null;
    this.stateArray = new Array();
    this.cityArray = new Array();
    this.suburbArray = new Array();
    this.cp = null;
    this.getStates();
    this.getCities();

    // get data
    this.getStoresByUser();
    this.getUserAddresses();
  }

  ngOnInit(): void {}

  async getStoresByUser() {
    const storesRes = await this.tlacu.store.listStore(null, null, null, 2, null).toPromise();
    if (storesRes.length <= 0) { return; }
    const storesTemp: Store[] = Array();
    storesRes.recordset.forEach(store => {
      storesTemp.push(store);
    });
    this.stores = storesTemp;
  }

  // -------------- ADDRESS ------------------
  async getUserAddresses() {
    console.log('get direcciones prof');
    const addressesTemp: UserAddress[] = new Array();
    const userAddressesRes = await this.tlacu.userAddress.listUserAddress(this.user.idUser).toPromise();
    if (userAddressesRes.length > 0 ) {
      userAddressesRes.recordset.forEach( userAddress => {
        const userAdd = new UserAddress(userAddress);
        // set the address
        this.setAddress(userAdd);
        // push the address to temporary array
        addressesTemp.push(userAdd);
      });
      this.userAddresses = addressesTemp; // set addresses array console.log(this.userAddresses);
    }
  }

  setAddress(userAddress: UserAddress) {
    this.tlacu.address.getAddress(userAddress.fkAddress).subscribe( res => {
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

  getStates() {
    this.tlacu.stateEnum.listStateEnum().subscribe( res => {
      this.stateArray.push(new StateEnum(res.recordset[0]));
      this.selectedState = this.stateArray[0].idStateEnum;
    });
  }

  getCities() {
    this.cp = null;
    this.tlacu.cityEnum.listCityEnum().subscribe( res => {
      if (res.length > 0) {
        res.recordset.forEach(city => {
          const c = new CityEnum(city);
          this.cityArray.push(c);
        });
      }
    });
  }

  getSuburbs(idCityEnum: number ) {
    console.log('get suburbs');
    console.log(idCityEnum);
    let suburbArrayTemp: SuburbEnum[] = new Array();
    this.tlacu.suburbEnum.listSuburbEnum(null, null, null, idCityEnum).subscribe( res => {
      console.log(res);
      if (res.length > 0) {
        res.recordset.forEach(suburb => {
          const s = new SuburbEnum(suburb);
          suburbArrayTemp.push(s);
        });
      }
    });
    this.suburbArray = suburbArrayTemp;

  }

  getCp() {
    this.tlacu.suburbEnum.getSuburbEnum(this.selectedSuburb).subscribe(res => {
      const sub = new SuburbEnum(res.recordset[0]);
      this.cp = sub.postalCode;
    });
  }
// -------------- BUTTONS ------------------
  public editStore(idStore: number) {
    console.log('Editando tienda ' + idStore);
  }
  public deleteStore(idStore: number) {
    console.log('Eliminando tienda ' + idStore);
  }
  public deleteUserAddress(userAddress: UserAddress) {
    console.log('Eliminando user address'); // console.log(userAddress);
    if (this.tlacu.manager.user.fkAddress != null && this.tlacu.manager.user.fkAddress === userAddress.fkAddress) {
      this.tlacu.manager.user.fkAddress = null;
    }
    this.tlacu.userAddress.deleteUserAddress(userAddress.fkAddress, userAddress.fkUser).subscribe( res => {
      console.log(res);
      this.getUserAddresses();
      this.tlacu.manager.updateUserAddress.next(1);
    }, err => { console.log(err); });

  }

  editInfo() {}

  createAddress(street: string) {
    if (this.selectedCity != null && this.selectedSuburb != null) {
      if (street.length > 0 && this.cp != null) {
        // create addressEnum
        const addEnum = new AddressEnum({address: street});
        this.tlacu.adressEnum.createAddressEnum(addEnum).subscribe(res => {
          if (res.success) {
            console.log(res);
            const idAddressEnum: number = res.createdAddressEnum.insertId;
            console.log(idAddressEnum);
            // create Address
            const add = new Address({fkAddressEnum: idAddressEnum, fkStateEnum: this.selectedState,
                                     fkCityEnum: this.selectedCity, fkSuburbEnum: this.selectedSuburb});
            this.tlacu.address.createAddress(add).subscribe( res2 => {
              console.log(res2);
              if (res2.success) {
                const idAddress: number = res2.createdAddress.insertId;
                console.log(idAddress);
                const uAdd = new UserAddress({fkUser: this.tlacu.manager.user.idUser, fkAddress: idAddress});
                this.tlacu.userAddress.createUserAddress(uAdd).subscribe( res3 => {
                  if (res3.success) {
                    this.getUserAddresses();
                    this.tlacu.manager.updateUserAddress.next(1);
                    this.modalService.dismissAll();
                  }
                });
              }
            });
          }
        });
      }
    }
  }

  open(content) {
    this.modalService.open(content);
  }
}
