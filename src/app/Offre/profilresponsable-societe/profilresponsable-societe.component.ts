import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respsociete } from 'src/app/model/respsociete';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { OffreService } from 'src/app/services/offre.service';
import { ResponsabelSocietyService } from 'src/app/services/responsabel-society.service';
import { StageService } from 'src/app/services/stage.service';
import { TravailleService } from 'src/app/services/travaille.service';

@Component({
  selector: 'app-profilresponsable-societe',
  templateUrl: './profilresponsable-societe.component.html',
  styleUrls: ['./profilresponsable-societe.component.css']
})
export class ProfilresponsableSocieteComponent implements OnInit {
  updateUserForm: FormGroup;
  user;
  adresse;
  siteWeb;
  listtravaille;
  idtravaille;
  idstage;
  liststage;
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
  detaillformation = new Respsociete();

  constructor(private formBuilder: FormBuilder,private authenService: AuthentificationService
    ,private offreservice: OffreService,
    private respsocieteservice: ResponsabelSocietyService,
    private travailleservice:TravailleService,
    private router:Router,private toastr: ToastrService,
    private stageservice: StageService) {

      this.id =  localStorage.getItem('iduser');
      this.getbyid(this.id)
      //this.idoffre=localStorage.getItem('iduser');
      this.idtravaille=localStorage.getItem('iduser');
      this.idstage=localStorage.getItem('iduser');


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
        Validators.minLength(2)
      ])),
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
    this.getallstage()
   

    
  }
  getprofile(){
    this.authenService.getprofile().subscribe(res=>{
      console.log(res);
      this.user=res;
      localStorage.setItem('iduser',this.user['id']);
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
      this.telephone=res['telephone'];
      this.siteWeb=res['siteWeb'];
      this.adresse=res['adresse'];
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
      this.respsocieteservice.getbyid(id).subscribe(res=>{
        console.log(res)
    this.candidat=res;
    this.updateUserForm.patchValue({
      nom : this.candidat.nom,                     
      prenom:this.candidat.prenom,
      adresse:this.candidat.adresse,
      username:this.candidat.username,
      siteWeb:this.candidat.siteWeb,
      telephone:this.candidat.telephone,
      description:this.candidat.description,
      email:this.candidat.email



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
   
      this.respsocieteservice.modifier(localStorage.getItem('iduser'),data).subscribe(res=>{

            console.log(res);
            
            this.toastr.success(' Profil Modifié  !', 'Merci!', { timeOut: 4000, });
            //this.router.navigate(['/psociete']);
           
            
      })
      window.location.reload();
    
    }

    getallcomentaire(){
  
      this.travailleservice.gettravaille(this.idtravaille).subscribe(res=>{
        console.log(res);
        this.listtravaille=res;
      })
    }
    getallstage(){
  
      this.stageservice.getstage(this.idstage).subscribe(res=>{
        console.log(res);
        this.liststage=res;
      })
    }
      //this.submitted = false;
      //this.updateUserForm.reset();
     // window.location.reload();
 

    supprimer(id) {
      this.travailleservice.supprimer(id).subscribe(res => {
        console.log(res);

        this.toastr.error(' Offre Supprimé  !', 'Merci!', { timeOut: 4000, });

        
      });
      
      //window.location.reload();
      
    }
}
