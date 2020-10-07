import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SecteurService} from '../../../services/Secteur/secteur.service';
import {AuthentificationService} from '../../../services/authentification.service';
import {StageService} from '../../../services/stage.service';

@Component({
  selector: 'app-ajouter-stage',
  templateUrl: './ajouter-stage.component.html',
  styleUrls: ['./ajouter-stage.component.css']
})
export class AjouterStageComponent implements OnInit {

  listsecteur;
  submitted = false;
  AjouterStageForm: FormGroup;
  userconnectee;
  constructor(private formBuilder: FormBuilder,
              private stageservice: StageService,
              private router: Router, private authservice: AuthentificationService,
              private secteurservice: SecteurService) {
  }


  ngOnInit(): void {
    this.getprofile();
    this.AjouterStageForm = this.formBuilder.group({
      idsecteur: ['', Validators.required],
      titre: ['', Validators.required],
      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      duree: ['', Validators.required],
      nombre: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required],


    });
    this.all();
  }

  all() {
    this.secteurservice.getall().subscribe(res => {
      console.log(res);
      this.listsecteur = res;
    });

  }

  get f() {
    return this.AjouterStageForm.controls;
  }

  getprofile() {
    this.authservice.getprofile().subscribe(res => {
      console.log(res);
      this.userconnectee = res;
      localStorage.setItem('iduser', this.userconnectee.id)
    })
  }

  AjouterStage() {
    this.submitted = true;
    console.log(this.AjouterStageForm.value);
    // stop here if form is invalid
    if (this.AjouterStageForm.invalid) {
      return;
    }

    this.stageservice.Ajouter(this.AjouterStageForm.value, localStorage.getItem('iduser'), this.AjouterStageForm.value.idsecteur).subscribe(result => {
      console.log(result);


    });
    this.submitted = false;
    this.AjouterStageForm.reset();

  }
}
