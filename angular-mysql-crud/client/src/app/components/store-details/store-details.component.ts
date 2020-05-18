import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { User } from 'src/app/models/User';
import { Store } from 'src/app/models/Store';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  user: User;
  socialUser: SocialUser;
  stores: Store[];
  constructor(
    private tlacu: TlacuServices
  ) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
  }

  ngOnInit(): void {
    this.tlacu.store.listStore(null, null, null, this.user.idUser, null).subscribe(
      res => {
        this.stores = res.body;
        console.log(this.stores);
      });
  }

}
