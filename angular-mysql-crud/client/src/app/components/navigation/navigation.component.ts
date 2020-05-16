import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'angularx-social-login';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  active = 0;
  constructor(private authService: AuthService, private router: Router) {

   }

  ngOnInit(): void {

  }

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
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
