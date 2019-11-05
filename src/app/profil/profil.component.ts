import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  titre="Liste des profils";
  profils=["Admin","User","Visitor"];
  profil="Visitor";
  pselect=this.profil;

    
  

}
