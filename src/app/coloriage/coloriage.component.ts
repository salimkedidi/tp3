import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  couleur="black";
  police="";
  theme="";
  s:string;
  Changme(c,p){
    this.couleur=c;
    this.police=p;


  }
  
  

}
