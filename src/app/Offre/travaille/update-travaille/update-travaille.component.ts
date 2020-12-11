import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { SecteurService } from 'src/app/services/Secteur/secteur.service';
import { TravailleService } from 'src/app/services/travaille.service';


@Component({
  selector: 'app-update-travaille',
  templateUrl: './update-travaille.component.html',
  styleUrls: ['./update-travaille.component.css']
})
export class UpdateTravailleComponent implements OnInit {
  idtravaille;
  travaille;
  listsecteur;
  nomuser;
  listTravaille;
  user;
  submitted = false;
  idsecteur;
  UpdateTravailleForm: FormGroup;
  constructor(private activatedroute:ActivatedRoute,private formBuilder: FormBuilder,
    private travailleservice: TravailleService,
    private router: Router, private authservice: AuthentificationService,
    private secteurservice: SecteurService,private toastr: ToastrService) {

      console.log(this.activatedroute.params)
      this.idtravaille=this.activatedroute.params['_value']['id'] 
      this.getbyid(this.idtravaille)
     }
 
 
 
  ngOnInit(): void {
    
    this.getone(this.idtravaille);
    this.getprofile();
    this.UpdateTravailleForm = this.formBuilder.group({
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
    this.getprofile();
  }
  getbyid(id){
    this.travailleservice.getbyid(id).subscribe(res=>{
      console.log(res)
  this.travaille=res;
  this.UpdateTravailleForm.patchValue({
      idsecteur : this.travaille.idsecteur,                     
      titre:this.travaille.titre,  
      technologie:this.travaille.technologie,  
      date_deb:this.travaille.date_deb,
      typeContrat:this.travaille.typeContrat,
      type:this.travaille.type,
      adresse:this.travaille.adresse,
      siege:this.travaille.siege,
      description:this.travaille.description,
    
  
  })
    })
  }
  all() {
    this.secteurservice.getall().subscribe(res => {
      console.log(res);
      this.listsecteur = res;
    });

  }
  get f() {
    return this.UpdateTravailleForm.controls;
  }
  getone(idoffre){
    this.travailleservice.getbyid(idoffre).subscribe(res=>{
      this.listTravaille=res
      console.log(res)
    })

  }
     
  
  edit() {
    let data =this.UpdateTravailleForm.value;
 
  console.log(data)
 
    this.travailleservice.modifier(this.idtravaille,this.UpdateTravailleForm.value.idsecteur,data).subscribe(res=>{
     
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

    
    })}

    reset() {
      this.submitted = false;
      this.UpdateTravailleForm.reset();
    }
}
