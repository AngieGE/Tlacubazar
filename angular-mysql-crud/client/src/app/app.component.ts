import { Component } from '@angular/core';
import {ActivationStart, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  rout: string;

  constructor(private router: Router){
    router.events.subscribe((val: ActivationStart) => {
      localStorage.setItem('rout', router.url) ;
      this.rout = localStorage.getItem('rout');

    });
  }

}
