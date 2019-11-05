import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  titre="Opération sur un tableau";
  tab=[15,46,0,89,80];
  titre2="Affichage des boutons des éléments pairs du tableau";
  onPosition(index:number){
    console.log(index);
  
  }

}
