import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {ContainerComponent} from './home/container/container.component';
import {FooterComponent} from './home/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ModalModule} from 'ngx-bootstrap/modal';
import { Erreur404Component } from './erreur404/erreur404.component';
import { FormationComponent } from './formation/formation.component';
import { StageComponent } from './Offre/stage/stage.component';
import { TravailleComponent } from './Offre/travaille/travaille.component';
import { AjouterFormationComponent } from './formation/ajouter-formation/ajouter-formation.component';
import { AjouterStageComponent } from './Offre/stage/ajouter-stage/ajouter-stage.component';
import { AjouterTravailleComponent } from './Offre/travaille/ajouter-travaille/ajouter-travaille.component';
import { CandidatComponent } from './formation/candidat/candidat.component';
import { EmployersComponent } from './offre/employers/employers.component';
import { StagePipe } from './recherche/stage.pipe';
import { TravaillePipe } from './recherche/travaille.pipe';
import { ListComponent } from './candidat/list/list.component';
import { ProfilComponent } from './candidat/profil/profil.component';
import { FormationdetailComponent } from './formationdetail/formationdetail.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { UpdateComponent } from './formation/update/update.component';
import { OffrePipe } from './recherche/offre.pipe';
import { CandidatPipe } from './recherche/candidat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    Erreur404Component,
    FormationComponent,
    StageComponent,
    TravailleComponent,

    AjouterFormationComponent,
    AjouterStageComponent,
    AjouterTravailleComponent,
    CandidatComponent,
    EmployersComponent,
    StagePipe,
    TravaillePipe,
    ListComponent,
    ProfilComponent,
    FormationdetailComponent,
    UpdateComponent,
    OffrePipe,
    CandidatPipe
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule, ModalModule.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
