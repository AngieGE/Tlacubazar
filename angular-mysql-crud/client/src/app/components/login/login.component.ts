import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faFacebook = faFacebook;
  faGoogle = faGoogle;
  users: any = [];

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getCuestionarios().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

}
