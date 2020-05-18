import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { Store } from 'src/app/models/Store';
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

  user: User;
  socialUser: SocialUser;
  loggedIn: boolean;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  stores: Store[];

  constructor(
    private authService: AuthService,
    private tlacu: TlacuServices
  ) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
    this.stores = Array();
    console.log('user: ', this.user);
    console.log('socialUser: ', this.socialUser);

    this.getStoresByUser();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    /*this.tlacu.store.listStore(null, null, null, 2, null).subscribe(
      res => {
        this.stores = res.body;
        console.log(res.body);
      });
      */
  }

  async getStoresByUser(){
    const storesRes = await this.tlacu.store.listStore(null, null, null, 2, null).toPromise();
    if (storesRes.length <= 0) { return; }
    let storesTemp : Store[] = Array();
    storesRes.recordset.forEach(store => {
      storesTemp.push(store);
    });
    this.stores = storesTemp;
    console.log(this.stores);
  }

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

}
