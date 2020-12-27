import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { SecteurService } from 'src/app/services/Secteur/secteur.service';
import { TravailleService } from 'src/app/services/travaille.service';

@Component({
  selector: 'app-ajouter-travaille',
  templateUrl: './ajouter-travaille.component.html',
  styleUrls: ['./ajouter-travaille.component.css']
})
export class AjouterTravailleComponent implements OnInit {
  seletedValue = 'info';
  nomuser;
  prenomuser;
  listsecteur;
  submitted = false;
  AjouterTravailleForm: FormGroup;
  userconnectee;
  constructor(private formBuilder: FormBuilder,
    private travailleservice: TravailleService,
    private router: Router, private authservice: AuthentificationService,
    private secteurservice: SecteurService,private toastr: ToastrService,
    private authenService:AuthentificationService) { }

  ngOnInit(): void { this.getprofile();
    this.AjouterTravailleForm = this.formBuilder.group({
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
    return this.AjouterTravailleForm.controls;
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

  AjouterTravaille() {
    this.submitted = true;
    console.log(this.AjouterTravailleForm.value);
    // stop here if form is invalid
    if (this.AjouterTravailleForm.invalid) {
      return;
    }

    this.travailleservice.Ajouter(this.AjouterTravailleForm.value, localStorage.getItem('iduser'), this.AjouterTravailleForm.value.idsecteur).subscribe(result => {
      console.log(result);
      this.toastr.success(' ajouté avec succées !', 'Offre Travaille!', { timeOut: 3000, });


    });
    this.submitted = false;
    this.AjouterTravailleForm.reset();

  }

   
  reset() {
    this.submitted = false;
    this.AjouterTravailleForm.reset();
  }

  deconecter() {

    this.authenService.logout();
    localStorage.setItem('connecte', 'false');
    //this.router.navigate(['']);
    window.location.reload();
  }
}
