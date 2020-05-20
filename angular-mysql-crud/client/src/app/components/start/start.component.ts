import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import {TlacuServices} from '../../services/index';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private authService: AuthService, private tlacu: TlacuServices, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.tlacu.manager.unsetItems();
    this.authService.signOut().then( res => {
      this.router.navigate(['/login']);
    });
  }
}
