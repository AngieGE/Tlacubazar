import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import {TlacuServices} from '../../services/index';
import { User, _StatusEnum, Address, UserAddress, AddressEnum,
        CityEnum, StateEnum, SuburbEnum } from 'src/app/models';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  active = 0;
  user: User = null;
  socialUser: SocialUser = null;
  cartProducts = 0;
  userAddresses: UserAddress[];

  constructor(private authService: AuthService, private tlacu: TlacuServices, private router: Router) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
    if (this.user != null) {
      this.getCartProduct();
    }
    this.getUserAddresses();
  }

  ngOnInit(): void {
    this.tlacu.manager.updateUserAddress.subscribe(
      state => {
        console.log('enter suscription event');
        console.log(this.tlacu.manager.user);
        if (this.tlacu.manager.user.fkAddress == null) {
          this.user.fkAddress = null;
          this.user.address = null;
          this.tlacu.manager.updateCurrentUserAddress.next(1);
        }
        this.getUserAddresses();
      }
  );
  }



  getCartProduct() {
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.ESPERANDO_ENVIO, this.user.idUser).subscribe( orders => { // esperando envio
      this.cartProducts = orders.length;
    });
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.PAUSADA, this.user.idUser).subscribe( orders => { // pausado
      this.cartProducts += orders.length;
    });
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.ENVIADA, this.user.idUser).subscribe( orders => { // enviada
      this.cartProducts += orders.length;
    });
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.PAGADA, this.user.idUser).subscribe( orders => { // pagada
      this.cartProducts += orders.length;
    });
  }

// -------------- NAVBAR BUTTONS ------------------

  goCart() {
    this.router.navigate(['/cart']);
  }

  goService() {
    this.active = 2;
    this.router.navigate(['/catalogue/service/']);
  }

  goProduct() {
    this.active = 2;
    this.router.navigate(['/catalogue/product/']);
  }

  myProfile() {
    this.active = 3;
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.tlacu.manager.unsetItems();
    this.authService.signOut().then( res => {
      this.router.navigate(['/login']);
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  clickLogo() {
    this.active = 0;
    this.router.navigate(['/']);
  }

  setCurentUserAddress(address: Address) {
    if (address.idAddress === this.tlacu.manager.user.fkAddress) {
      console.log('no pasa');
      return;
    }
    console.log('si pasa');

    this.tlacu.manager.user.fkAddress = address.idAddress;
    this.tlacu.manager.user.address = address;
    this.tlacu.manager.setItems( this.tlacu.manager.socialUser, this.tlacu.manager.user);
    this.user.fkAddress = address.idAddress;
    this.user.address = address;
    // this.tlacu.manager.updateUserAddress.next(1);
    this.tlacu.manager.updateCurrentUserAddress.next(1);
  }
  // -------------- ADDRESS ------------------
  async getUserAddresses() {
    console.log('get addresses in navbar');
    let addressesTemp: UserAddress[] = new Array();
    const userAddressesRes = await this.tlacu.userAddress.listUserAddress(this.user.idUser).toPromise();
    if (userAddressesRes.length > 0 ) {
      userAddressesRes.recordset.forEach( userAddress => {
        const userAdd = new UserAddress(userAddress);
        // set the address
        this.setAddress(userAdd);
        // push the address to temporary array
        addressesTemp.push(userAdd);
      });
      this.userAddresses = addressesTemp; // set addresses array
    } else {
      this.userAddresses = new Array();
    }
  }

  setAddress(userAddress: UserAddress) {
    // console.log('set address');
    this.tlacu.address.getAddress(userAddress.fkAddress).subscribe( res => {
      // console.log( res);
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
    // console.log('set address enum');
    this.tlacu.adressEnum.getAddressEnum(address.fkAddressEnum).subscribe( res => {
      address.addressEnum = new AddressEnum(res.recordset[0]);
    }, err => {console.log(err); });
  }

  setStateEnum(address: Address) {
    this.tlacu.stateEnum.getStateEnum(address.fkStateEnum).subscribe( res => {
      address.stateEnum = new StateEnum(res.recordset[0]);
    }, err => {console.log(err); });
  }

  setCityEnum(address: Address) {
    this.tlacu.cityEnum.getCityEnum(address.fkCityEnum).subscribe( res => {
      address.cityEnum = new CityEnum(res.recordset[0]);
    }, err => {console.log(err); });
  }

  setSuburbEnum(address: Address) {
    this.tlacu.suburbEnum.getSuburbEnum(address.fkSuburbEnum).subscribe( res => {
      address.suburbEnum = new SuburbEnum(res.recordset[0]);
    }, err => {console.log(err); });
  }
}
