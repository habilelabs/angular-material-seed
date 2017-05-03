import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //ngOnInit is called right after the directive's data-bound properties have been checked for the first time,
    // and before any of its children have been checked. It is invoked only once when the directive is instantiated.
  }

}
