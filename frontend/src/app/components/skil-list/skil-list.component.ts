import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skil-list',
  templateUrl: './skil-list.component.html',
  styleUrls: ['./skil-list.component.css']
})
export class SkilListComponent implements OnInit {

  names: string[];
  skills:any;


  constructor() { 
   this.names = ['carlos', 'sergio', 'tatiana'];
   this.skills = [
    {
      "img": "http://www.xaviro.com/assets/img/skills/html.svg",
      "desc": "HTML"
    },
    {
      "img": "http://www.xaviro.com/assets/img/skills/css.svg",
      "desc": "CSS"
    },{
      "img": "http://www.xaviro.com/assets/img/skills/js.svg",
      "desc": "javascript"
    },
    {
      "img": "http://www.xaviro.com/assets/img/skills/angular.svg",
      "desc": "ANGULAR"
    },
    {
      "img": "http://www.xaviro.com/assets/img/skills/typescript.svg",
      "desc": "TYPESCRIPT"
    },{
      "img": "http://www.xaviro.com/assets/img/skills/bootstrap.svg",
      "desc": "BOOTSTRAP"
    } ,
    {
      "img": "http://www.xaviro.com/assets/img/skills/angular.svg",
      "desc": "ANGULAR"
    },
    {
      "img": "http://www.xaviro.com/assets/img/skills/angular.svg",
      "desc": "ANGULAR"
    },{
      "img": "http://www.xaviro.com/assets/img/skills/angular.svg",
      "desc": "ANGULAR"
    }
   ]
  
  
  }

  ngOnInit(): void {
  }

}
