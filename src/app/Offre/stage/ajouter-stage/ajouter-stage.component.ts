import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SecteurService} from '../../../services/Secteur/secteur.service';
import {AuthentificationService} from '../../../services/authentification.service';
import {StageService} from '../../../services/stage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-stage',
  templateUrl: './ajouter-stage.component.html',
  styleUrls: ['./ajouter-stage.component.css']
})
export class AjouterStageComponent implements OnInit {
  nomuser;
  prenomuser;
  listsecteur;
  submitted = false;
  AjouterStageForm: FormGroup;
  userconnectee;
  constructor(private formBuilder: FormBuilder,
              private stageservice: StageService,
              private router: Router, private authservice: AuthentificationService,
              private secteurservice: SecteurService,private toastr: ToastrService,
              private authenService:AuthentificationService) {
  }


  ngOnInit(): void {
    this.getprofile();
    this.AjouterStageForm = this.formBuilder.group({
      idsecteur: ['', Validators.required],
      titre: ['', Validators.required],
      technologie: ['', Validators.required],
      date_deb: ['', Validators.required],
      typeContrat: ['', Validators.required],
      type: ['', Validators.required],
      adresse: ['', Validators.required],
      siege: ['', Validators.required],
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
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
    })
  }

  AjouterStage() {
    this.submitted = true;
    console.log(this.AjouterStageForm.value);
    // stop here if form is invalid
    if (this.AjouterStageForm.invalid) {
      return;
    }
console.log( localStorage.getItem('iduser'))
    this.stageservice.Ajouter(this.AjouterStageForm.value, localStorage.getItem('iduser'), this.AjouterStageForm.value.idsecteur).subscribe(result => {
      console.log(result);
      this.toastr.success(' ajouté avec succées !', 'Offre Stage!', { timeOut: 3000, });



    });
    this.submitted = false;
    this.AjouterStageForm.reset();

  }

  reset() {
    this.submitted = false;
    this.AjouterStageForm.reset();
  }
  deconecter() {

    this.authenService.logout();
    localStorage.setItem('connecte', 'false');
    //this.router.navigate(['']);
    window.location.reload();
  }
}
