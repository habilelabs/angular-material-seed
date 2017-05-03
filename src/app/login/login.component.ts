import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //ngOnInit is called right after the directive's data-bound properties have been checked for the first time,
    // and before any of its children have been checked. It is invoked only once when the directive is instantiated.
  }

}
