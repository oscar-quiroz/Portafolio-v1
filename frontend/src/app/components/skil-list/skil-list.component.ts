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
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919827.svg?token=exp=1610757727~hmac=9d2f1b6c36e6d4490f2dd2054113246e",
      "desc": "HTML"
    },
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919826.svg?token=exp=1610758067~hmac=0afb544911430cfb90c83c41d67e4fe6",
      "desc": "CSS"
    },{
      "img": "https://www.flaticon.es/svg/vstatic/svg/541/541509.svg?token=exp=1610758688~hmac=6a09634a37bf01f044b33dff36b7538b",
      "desc": "javascript"
    },
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919827.svg?token=exp=1610757727~hmac=9d2f1b6c36e6d4490f2dd2054113246e",
      "desc": "HTML"
    },
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919826.svg?token=exp=1610758067~hmac=0afb544911430cfb90c83c41d67e4fe6",
      "desc": "CSS"
    },{
      "img": "https://www.flaticon.es/svg/vstatic/svg/541/541509.svg?token=exp=1610758688~hmac=6a09634a37bf01f044b33dff36b7538b",
      "desc": "javascript"
    } ,
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919827.svg?token=exp=1610757727~hmac=9d2f1b6c36e6d4490f2dd2054113246e",
      "desc": "HTML"
    },
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919826.svg?token=exp=1610758067~hmac=0afb544911430cfb90c83c41d67e4fe6",
      "desc": "CSS"
    },{
      "img": "https://www.flaticon.es/svg/vstatic/svg/541/541509.svg?token=exp=1610758688~hmac=6a09634a37bf01f044b33dff36b7538b",
      "desc": "javascript"
    } ,
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919827.svg?token=exp=1610757727~hmac=9d2f1b6c36e6d4490f2dd2054113246e",
      "desc": "HTML"
    },
    {
      "img": "https://www.flaticon.es/svg/vstatic/svg/919/919826.svg?token=exp=1610758067~hmac=0afb544911430cfb90c83c41d67e4fe6",
      "desc": "CSS"
    }
   ]
  
  
  }

  ngOnInit(): void {
  }

}
