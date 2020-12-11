import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formation } from 'src/app/model/formation';
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

  listsecteur
  listFormation;
  submitted = false;
  UpdateFormationForm: FormGroup;
  userconnectee;
  idformation;
  idsecteur;
  user;
  nomuser;
  prenomuser;
  niveauEtude; compteLinkedin; logo;
iduser;

  telephone;
  email;
  formation;
  id;

 
  constructor(private activatedroute:ActivatedRoute,private formBuilder: FormBuilder,
    private formationservice: FormationService,
    private router: Router, private authservice: AuthentificationService,
    private secteurservice: SecteurService ,private toastr: ToastrService) {

         
  console.log(this.activatedroute.params)
  this.idformation=this.activatedroute.params['_value']['id'] 
  this.getbyid(this.idformation)
  
     }

  ngOnInit(): void {
    this.getone(this.idformation);
    this.getprofile();
    this.UpdateFormationForm = this.formBuilder.group({
      idsecteur: ['', Validators.required],
      titre: ['', Validators.required],
      technologie: ['', Validators.required],
      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      duree: ['', Validators.required],
      nombre: ['', Validators.required],
      prix: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],


    });
    this.all();
    this.getprofile();
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

  
  getone(idformation){
    this.formationservice.getbyid(idformation).subscribe(res=>{
      this.listFormation=res
      console.log(res)
    })

  }

  getbyid(id){
    this.formationservice.getbyid(id).subscribe(res=>{
      console.log(res)
  this.formation=res;
  this.UpdateFormationForm.patchValue({
      idsecteur : this.formation.idsecteur,                     
      titre:this.formation.titre,  
      date_deb:this.formation.date_deb,
      date_fin:this.formation.date_fin,
      duree:this.formation.duree,
      nombre:this.formation.nombre,
      prix:this.formation.prix,
      adresse:this.formation.adresse,
      description:this.formation.description,
  
  })
    })
  }



    
     
  
  edit() {
    let data =this.UpdateFormationForm.value;
 
  console.log(data)
 
    this.formationservice.modifier(this.idformation,this.UpdateFormationForm.value.idsecteur,data).subscribe(res=>{
     
          console.log(res);
          this.toastr.success(' Formation Modifié  !', 'Merci!', { timeOut: 3000, });

     
    })

  }
  getprofile(){
    this.authservice.getprofile().subscribe(res=>{
      console.log(res);
      this.user=res;
      localStorage.setItem('iduser',this.user['id']);
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
      this.niveauEtude=res['niveauEtude'];
      this.compteLinkedin=res['compteLinkedin'];
      this.telephone=res['telephone'];
      this.email=res['email'];
      this.logo=res['logo'];
    
    })}
}
