import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {Erreur404Component} from './erreur404/erreur404.component';
import {FormationComponent} from './formation/formation.component';
import {StageComponent} from './Offre/stage/stage.component';
import {TravailleComponent} from './Offre/travaille/travaille.component';
import {AjouterStageComponent} from './Offre/stage/ajouter-stage/ajouter-stage.component';
import {AjouterTravailleComponent} from './Offre/travaille/ajouter-travaille/ajouter-travaille.component';
import { CandidatComponent } from './formation/candidat/candidat.component';
import { EmployersComponent } from './offre/employers/employers.component';
import { ContainerComponent } from './home/container/container.component';
import { ProfilComponent } from './candidat/profil/profil.component';
import { FormationdetailComponent } from './formationdetail/formationdetail.component';
import { UpdateComponent } from './formation/update/update.component';
import { ListComponent } from './candidat/list/list.component';
import { FavorieslistComponent } from './favorieslist/favorieslist.component';
import { AjouterFormationComponent } from './formation/ajouter-formation/ajouter-formation.component';
import { StagedetailComponent } from './Offre/stagedetail/stagedetail.component';
import { TravaildetailComponent } from './Offre/travaildetail/travaildetail.component';
import { ProfilresponsableCentreComponent } from './formation/profilresponsable-centre/profilresponsable-centre.component';
import { ProfilresponsableSocieteComponent } from './Offre/profilresponsable-societe/profilresponsable-societe.component';
import { OffrebyadreeseComponent } from './Offre/offrebyadreese/offrebyadreese.component';
import { CandidatSingleComponent } from './candidat/candidat-single/candidat-single.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UpdateTravailleComponent } from './Offre/travaille/update-travaille/update-travaille.component';
import { UpdateStageComponent } from './Offre/stage/update-stage/update-stage.component';
import { OffrebytitreComponent } from './Offre/offrebytitre/offrebytitre.component';
import { ListFormationComponent } from './formation/list-formation/list-formation.component';
import { ListTravailleComponent } from './Offre/travaille/list-travaille/list-travaille.component';
import { ListStageComponent } from './Offre/stage/list-stage/list-stage.component';
import { ProfilCandidatComponent } from './candidat/profil-candidat/profil-candidat.component';



const routes: Routes = [

  

  {path:'', component:HomeComponent,children:
  [{path:'',component:ContainerComponent},
  {path:'formation', component:FormationComponent},
  {path:'formation/:id', component:FormationdetailComponent},
  {path:'fajouter', component:AjouterFormationComponent},
  //{path:'formation/detail', component:FormationdetailComponent,canActivate: [AuthGuardService]},
  {path:'formation/update/:id', component:UpdateComponent},
  {path:'formation/candidat', component:CandidatComponent},
  {path:'erreur', component:Erreur404Component},
  {path:'offre/employers', component:EmployersComponent},
  {path:'offre/:adresse',component:OffrebyadreeseComponent},
  {path:'offre/:titre',component:OffrebytitreComponent},

  {path:'stage', component:StageComponent },
  {path:'stage/:id', component:StagedetailComponent},
  {path:'stage/update/:id', component:UpdateStageComponent},

  {path:'sajouter', component:AjouterStageComponent},
  {path:'travaille', component:TravailleComponent},
  {path:'travaille/:id', component:TravaildetailComponent},
  {path:'travaille/update/:id', component:UpdateTravailleComponent},
  
  {path:'tajouter', component:AjouterTravailleComponent},
  {path:'candidatlist/:id', component:ProfilComponent},
  {path:'candidat/profil', component:ProfilCandidatComponent},

  {path:'candidatlist', component:ListComponent},
  {path:'favorielist', component:FavorieslistComponent},
  {path:'pcentre', component:ProfilresponsableCentreComponent},
  {path:'psociete', component:ProfilresponsableSocieteComponent},
  {path:'travailledetail/:id', component:CandidatSingleComponent},
  {path:'howitworks', component:HowitworksComponent},
  {path:'contact', component:ContactComponent},
  {path:'listformation', component:ListFormationComponent},

  {path:'listtravaille', component:ListTravailleComponent},
  {path:'liststage', component:ListStageComponent},


  {path:'not-found' ,component:Erreur404Component},
  { path: '**', redirectTo: 'not-found' },


  



  



  
]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
