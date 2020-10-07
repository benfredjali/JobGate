import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {Erreur404Component} from './erreur404/erreur404.component';
import {FormationComponent} from './formation/formation.component';
import {StageComponent} from './Offre/stage/stage.component';
import {TravailleComponent} from './Offre/travaille/travaille.component';
import {AjouterFormationComponent} from './formation/ajouter-formation/ajouter-formation.component';
import {AjouterStageComponent} from './Offre/stage/ajouter-stage/ajouter-stage.component';
import {AjouterTravailleComponent} from './Offre/travaille/ajouter-travaille/ajouter-travaille.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'formation', component:FormationComponent},
  {path:'formation/ajouter', component:AjouterFormationComponent},
  {path:'formation/modifier', component:AjouterFormationComponent},
  {path:'erreur', component:Erreur404Component},
  {path:'stage', component:StageComponent},
  {path:'stage/ajouter', component:AjouterStageComponent},
  {path:'travaille', component:TravailleComponent},
  {path:'travaille/ajouter', component:AjouterTravailleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
