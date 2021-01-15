import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  getImage(image: any, time: string) {
    const t1 = '06:00';
    const t2 = '18:00';
    if (time >= t1 && time < t2) {
      return ('/images/morning.png');
    } else {
      return ('/images/evening.png');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
