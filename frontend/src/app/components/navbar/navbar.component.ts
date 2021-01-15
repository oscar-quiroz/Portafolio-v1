import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapse = true;
  toggleState() {
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
