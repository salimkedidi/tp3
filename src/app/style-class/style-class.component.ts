import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.css']
})
export class StyleClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  couleur="red";
  taille=32;
  style="italic";
  admin=true;
  classe="c1";

  getColor(){
    return "green";
  }

}
