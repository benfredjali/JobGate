import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { FormationService } from 'src/app/services/Formation/formation.service';
import { SecteurService } from 'src/app/services/Secteur/secteur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  listsecteur;
  listFormation;
  submitted = false;
  UpdateFormationForm: FormGroup;
  userconnectee;
  idformation;
 
  constructor(private activatedroute:ActivatedRoute,private formBuilder: FormBuilder,
    private formationservice: FormationService,
    private router: Router, private authservice: AuthentificationService,
    private secteurservice: SecteurService) {

         
  console.log(this.activatedroute.params)
  this.idformation=this.activatedroute.params['_value']['id'] 
     }

  ngOnInit(): void {
    this.getone(this.idformation);
    this.getprofile();
    this.UpdateFormationForm = this.formBuilder.group({
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
  get f() {
    return this.UpdateFormationForm.controls;
  }
  all() {
    this.secteurservice.getall().subscribe(res => {
      console.log(res);
      this.listsecteur = res;
    });

  }
  reset() {
    this.submitted = false;
    this.UpdateFormationForm.reset();
  }

  
  getone(id){
    this.formationservice.getbyid(id).subscribe(res=>{
      this.listFormation=res
      console.log(res)
    })
}

    
    edit() {
    this.submitted = true;
    console.log(this.UpdateFormationForm.value);
    // stop here if form is invalid
    if (this.UpdateFormationForm.invalid) {
      return;
    }

    this.formationservice.Modifier(this.idformation.value, localStorage.getItem('iduser'), this.idformation.value.idsecteur).subscribe(result => {
      console.log(result);

    
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Modifié avec Succees',
      showConfirmButton: false,
      timer: 1500
    })
    this.submitted = false;
    this.UpdateFormationForm.reset();

  }
  getprofile() {
    this.authservice.getprofile().subscribe(res => {
      console.log(res);
      this.userconnectee = res;
      localStorage.setItem('iduser', this.userconnectee.id)
    })
  }
}
