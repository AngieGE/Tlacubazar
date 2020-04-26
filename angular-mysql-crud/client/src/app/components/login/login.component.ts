import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
