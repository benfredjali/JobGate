import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidat } from 'src/app/model/candidat';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  updateUserForm: FormGroup;
  user;
  nomuser;
  prenomuser;
  photo;
  logo; niveauEtude;
  compteLinkedin;
  telephone;
  email;
  candidat;
  id;
  submitted = false;
  detaillformation = new Candidat();

  constructor(private formBuilder: FormBuilder,private imageservice:ImageService,private authenService: AuthentificationService,
    private candudatservice: CandidatService, private router:Router,private toastr: ToastrService) {

      this.id =  localStorage.getItem('iduser');
      this.getbyid(this.id)
    }

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      nom: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      prenom: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      adresse: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      niveauEtude: ['', Validators.required],
      compteLinkedin: ['', Validators.required],
      description: ['', Validators.required],

      //siteWeb: ['', Validators.required],
      telephone: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),Validators.minLength(6)
      ])),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],

    });



    this.getprofile();
   

    
  }
  getprofile(){
    this.authenService.getprofile().subscribe(res=>{
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
    deconecter() {

      this.authenService.logout();
      localStorage.setItem('connecte', 'false');
      //this.router.navigate(['']);
      window.location.reload();
    }
    
    getbyid(id){
      this.candudatservice.getbyid(id).subscribe(res=>{
        console.log(res)
    this.candidat=res;
    this.updateUserForm.patchValue({
      nom : this.candidat.nom,                     
      prenom:this.candidat.prenom,
      adresse:this.candidat.adresse,
      dateNaiss:this.candidat.dateNaiss,
      username:this.candidat.username,
      niveauEtude:this.candidat.niveauEtude,
      telephone:this.candidat.telephone,
      description:this.candidat.description,
      email:this.candidat.email,
      compteLinkedin:this.candidat.compteLinkedin



    })
      })
    }

    
     
  
  edit() {
      let data =this.updateUserForm.value;
     /* {
        nom : this.candidat.nom,                     
        prenom:this.candidat.prenom,
        adresse:this.detaillformation.adresse,
        dateNaiss:this.candidat.dateNaiss,
        username:this.candidat.username,
        niveauEtude:this.candidat.niveauEtude,
        telephone:this.candidat.telephone,
        description:this.candidat.description,
        email:this.candidat.email,
        compteLinkedin:this.candidat.compteLinkedin
      
    }*/
    console.log(data)
   
      this.candudatservice.modifier(localStorage.getItem('iduser'),data).subscribe(res=>{
       
            console.log(res);
            this.toastr.success(' Profil Modifié  !', 'Merci!', { timeOut: 3000, });

       
      })
  
    }

    
      //this.submitted = false;
      //this.updateUserForm.reset();
     // window.location.reload();
    
}
