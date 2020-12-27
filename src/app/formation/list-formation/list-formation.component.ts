import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respcentre } from 'src/app/model/respcentre';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { FormationService } from 'src/app/services/Formation/formation.service';
import { ResponsableCentreService } from 'src/app/services/responsabelcentre.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {
  updateUserForm: FormGroup;
  user;
  listformation;
  nomuser;
  prenomuser;
  adresse;
  logo; 
  siteWeb;
  telephone;
  email;
  candidat;
  id;
  idformation;
  submitted = false;
  listformations;
  detaillformation = new Respcentre();

  constructor(private formationservice: FormationService, private formBuilder: FormBuilder,private authenService: AuthentificationService,
    private respcentreservice: ResponsableCentreService, private router:Router,private toastr: ToastrService) {

      this.id =  localStorage.getItem('iduser');
      this.getbyid(this.id)
      this.idformation=localStorage.getItem('iduser');
    }

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom:['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
  
      siteWeb: ['', Validators.required],
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
    this.getallcomentaire()
   

    
  }
  getprofile(){
    this.authenService.getprofile().subscribe(res=>{
      console.log(res);
      this.user=res;
      localStorage.setItem('iduser',this.user['id']);
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
      this.adresse=res['adresse'];
      this.siteWeb=res['siteWeb'];
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
      this.respcentreservice.getbyid(id).subscribe(res=>{
        console.log(res)
    this.candidat=res;
    this.updateUserForm.patchValue({
      nom : this.candidat.nom,                     
      adresse:this.candidat.adresse,
      dateNaiss:this.candidat.dateNaiss,
      username:this.candidat.username,
      siteWeb:this.candidat.siteWeb,
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
   
      this.respcentreservice.modifier(localStorage.getItem('iduser'),data).subscribe(res=>{

            console.log(res);
            
            this.toastr.success(' Profil Modifié  !', 'Merci!', { timeOut: 3000, });

       
      })
      
   // window.location.reload();
    
    }

    
      //this.submitted = false;
      //this.updateUserForm.reset();
     // window.location.reload();
     getallcomentaire(){
  
      this.formationservice.getformation(this.idformation).subscribe(res=>{
        console.log(res);
        this.listformation=res;
      })
    }

    supprimer(id) {
      this.formationservice.supprimer(id).subscribe(res => {
        console.log(res);

        this.toastr.error(' Formation Supprimé  !', 'Merci!', { timeOut: 3000, });
       this.getallcomentaire();
        
      });
      
      //window.location.reload();
      
    }
}
