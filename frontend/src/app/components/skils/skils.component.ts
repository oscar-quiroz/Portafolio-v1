import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {

  
  @Input() img:string = "";
  @Input() desc:string = "";
  constructor() { 

  }

  ngOnInit(): void {
  }

}
