import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild('drop') elDrop: ElementRef;
  constructor() {

   }

  ngOnInit(): void {

  }

}
