import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormationService} from '../../services/Formation/formation.service';
import {SecteurService} from '../../services/Secteur/secteur.service';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {

  listsecteur;
  submitted = false;
  AjouterFormationForm: FormGroup;
  userconnectee;

  constructor(private formBuilder: FormBuilder,
              private formationservice: FormationService,
              private router: Router, private authservice: AuthentificationService,
              private secteurservice: SecteurService) {
  }

  ngOnInit(): void {
    this.getprofile();
    this.AjouterFormationForm = this.formBuilder.group({
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
    return this.AjouterFormationForm.controls;
  }

  getprofile() {
    this.authservice.getprofile().subscribe(res => {
      console.log(res);
      this.userconnectee = res;
      localStorage.setItem('iduser', this.userconnectee.id)
    })
  }

  AjouterFormation() {
    this.submitted = true;
    console.log(this.AjouterFormationForm.value);
    // stop here if form is invalid
    if (this.AjouterFormationForm.invalid) {
      return;
    }

    this.formationservice.Ajouter(this.AjouterFormationForm.value, localStorage.getItem('iduser'), this.AjouterFormationForm.value.idsecteur).subscribe(result => {
      console.log(result);


    });
    this.submitted = false;
    this.AjouterFormationForm.reset();

  }

  reset() {
    this.submitted = false;
    this.AjouterFormationForm.reset();
  }
}
