import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalimPipePiepe } from './pipes/salim.pipe';
import { TableauComponent } from './tableau/tableau.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule} from '@angular/forms';
import { OrientationComponent } from './orientation/orientation.component';
import { SaisonComponent } from './saison/saison.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { EmployeComponent } from './employe/employe.component';
import { NompersoPipe } from './nomperso.pipe';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MoyennePipe } from './moyenne.pipe';
import { DgPipe } from './dg.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SalimPipePiepe,
    TableauComponent,
    ProfilComponent,
    OrientationComponent,
    SaisonComponent,
    StyleClassComponent,
    ColoriageComponent,
    EmployeComponent,
    NompersoPipe,
    EtudiantComponent,
    MoyennePipe,
    DgPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
