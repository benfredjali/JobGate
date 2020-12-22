
import {Component, OnInit, TemplateRef} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ResponsableCentreService} from '../services/responsabelcentre.service';
import {ResponsabelSocietyService} from '../services/responsabel-society.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthentificationService} from '../services/authentification.service';
import {MustMatch} from './must-match-directive';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { ImageService } from '../services/image.service';
import { AlertService } from '../alert.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  password;
  user;roleuser;
  prenomuser;nomuser;valid;
  Confirmpassword;
  loading = false;
  loginForm: FormGroup;
  registerCandidatForm: FormGroup;
  registerSocieteForm: FormGroup;
  registerCentreForm: FormGroup;
  submitted = false;
  isActiveToggleTextPassword = true;
  modalRef: BsModalRef;
  nom;
  prenom;
  ison;
  photo;
  logo;
  filesToUpload: Array<File>;
  choix = 'candidat';

  constructor(private responsableCentreService: ResponsableCentreService,private imageservice:ImageService,
              private modalService: BsModalService,private authenService: AuthentificationService,
              private candudatservice: CandidatService,
              private formBuilder: FormBuilder,private router:Router,
              private responsabelSocietyService: ResponsabelSocietyService,
              private toastr: ToastrService) {

    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    if (localStorage.getItem('connecte') === 'true') {
      this.ison = true;
    }

  }

  ngOnInit(): void {
    this.getprofile();

    this.registerCandidatForm = this.formBuilder.group({
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
      adresse: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      dateNaiss: ['', Validators.required],
      niveauEtude: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      compteLinkedin: ['', Validators.required],
      description: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),

      //siteWeb: ['', Validators.required],
      telephone: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),Validators.minLength(6)
      ])),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],

    }, {
      validator: MustMatch('password', 'confirmpassword')
    });


/**  <div *ngIf="firstname.touched && firstname.invalid">
                        <small *ngIf="firstname.errors.required" class="text-danger">Firstname is required<br></small>
                        <small *ngIf="firstname.errors.pattern" class="text-danger">Invalid Firstname<br></small> */


    this.registerSocieteForm = this.formBuilder.group({
      nom: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
     
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      adresse: new FormControl('',Validators.compose([
        Validators.required,Validators.minLength(5)
      ])),
      description: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      siteWeb: new FormControl('',Validators.compose([
         Validators.required,
        Validators.minLength(3)
                  ])),
      telephone:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),Validators.minLength(6)
      ])),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    }, {
      validator:MustMatch('password', 'confirmpassword')
    });


    this.registerCentreForm = this.formBuilder.group({
      nom: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
     
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      adresse: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      description: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      siteWeb: ['', Validators.required],

      telephone:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),Validators.minLength(8)
      ])),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    }, {
      validator:MustMatch('password', 'confirmpassword')
    });


    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
this.reset();

  }

 
  choisirsocite() {
    this.choix = 'societe';

  }

  choisircandiat() {
    this.choix = 'candidat';

  }

  choisircentre() {
    this.choix = 'centre';

  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }

  get b() {
    return this.loginForm.controls;
  }

  get f() {
    return this.registerCandidatForm.controls;
  }
  
  get x() {
    return this.registerSocieteForm.controls;
  }

  get v() {
    return this.registerCentreForm.controls;
  }


  registercandidat() {

    const data = {
      nom: this.registerCandidatForm.value["nom"],
      prenom: this.registerCandidatForm.value["prenom"],
      username: this.registerCandidatForm.value["username"],
      adresse: this.registerCandidatForm.value["adresse"],
      dateNaiss: this.registerCandidatForm.value["dateNaiss"],
      niveauEtude: this.registerCandidatForm.value["niveauEtude"],
      compteLinkedin: this.registerCandidatForm.value["compteLinkedin"],
      description: this.registerCandidatForm.value["description"],
      logo: this.filesToUpload[0].name,
      telephone: this.registerCandidatForm.value["telephone"],
      email: this.registerCandidatForm.value["email"],
      password: this.registerCandidatForm.value["password"],
      confirmpassword: this.registerCandidatForm.value["confirmpassword"],

    }
    console.log(data);

    this.submitted = true;
    console.log(this.registerCandidatForm.value);
    // stop here if form is invalid
    if (this.registerCandidatForm.invalid) {
      return;
    }

    this.candudatservice.register(data).subscribe(result => {
       
      this.imageservice.uploadFile(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)   
      })
      console.log(result);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inscription avec succées',
        showConfirmButton: false,
        timer: 4000
      })
      window.location.reload();
      this.registerCandidatForm.reset();
    }
    
    , error2 => {


      Swal.fire(
        'OPPs',
        'Vérifier vos coordonnées:)',
        'error'
      );
    }
    
    );
    

  }



  registerResponsableSociete() {

    const data = {
      nom: this.registerSocieteForm.value["nom"],
      renom: this.registerSocieteForm.value["prenom"],
      username: this.registerSocieteForm.value["username"],
      adresse: this.registerSocieteForm.value["adresse"],
      description: this.registerSocieteForm.value["description"],
      siteWeb: this.registerSocieteForm.value["siteWeb"],
     logo: this.filesToUpload[0].name,
      telephone: this.registerSocieteForm.value["telephone"],
      email: this.registerSocieteForm.value["email"],
      password: this.registerSocieteForm.value["password"],
      confirmpassword: this.registerSocieteForm.value["confirmpassword"],

    }

    this.submitted = true;
    console.log(this.registerSocieteForm.value);
    // stop here if form is invalid
    if (this.registerSocieteForm.invalid) {
      return;
      
    }

    this.responsabelSocietyService.register(data).subscribe(result => {
      this.imageservice.uploadFile(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
      })
      console.log("resultsaversoc",result);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inscription avec succées',
        showConfirmButton: false,
        timer: 4000
      
    })
    window.location.reload();
    this.registerCandidatForm.reset();  
  }
     , error2 => {


      Swal.fire(
        'OPPs',
        'Vérifier vos coordonnées:)',
        'error'
      );
    }
     
    );
  
  }


  
  registerResponsableCentre() {
    const data = {
      nom: this.registerCentreForm.value["nom"],
      pSrenom: this.registerCentreForm.value["prenom"],
      username: this.registerCentreForm.value["username"],
      adresse: this.registerCentreForm.value["adresse"],
      description: this.registerCentreForm.value["description"],
      siteWeb: this.registerCentreForm.value["siteWeb"],
     logo: this.filesToUpload[0].name,
      telephone: this.registerCentreForm.value["telephone"],
      email: this.registerCentreForm.value["email"],
      password: this.registerCentreForm.value["password"],
      confirmpassword: this.registerCentreForm.value["confirmpassword"],


    }

    this.submitted = true;
    console.log(data);
    // stop here if form is invalid
    if (this.registerCentreForm.invalid) {
      return;
    }

    this.responsableCentreService.register(data).subscribe(result => {
    this.imageservice.uploadFile(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      })
      console.log(result);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inscription avec succées',
        showConfirmButton: false,
        timer: 4000
      })
      window.location.reload();
      this.registerCandidatForm.reset();
    }, error2 => {
      Swal.fire(
        'OPPs',
        'Vérifier vos coordonnées:)',
        'error'
      );}  
    );
  }


  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword !== true);
  }

  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

 
  reset() {
    this.submitted = false;
    this.registerCentreForm.reset();
  }


  isCandidat() {
    this.authenService.isCandidat();
  }

  isresponsableSociete() {
    this.authenService.isresponsableSociete();
    
  }

  isresponsableCentre() {
    this.authenService.isresponsableSociete();
  }

   /*onlogin() {

    this.submitted = true;
    const data = {
      username: this.loginForm.value.username,

      password: this.loginForm.value.password,
    };

    this.authenService.login(data).subscribe(res => {

        this.ison = true;
        localStorage.setItem('connecte', 'true');
        console.log(res);

        const jwt = res.headers.get('Authorization');
        this.authenService.saveToken(jwt);

        this.refresh();

      }
      , error2 => {

        Swal.fire(
          'OPPs',
          'Vérifier vos coordonnées:)',
          'error'
        );
      }
    );

    if (this.loginForm.invalid) {
      return;
    }

  } */


  onlogin() {

    this.submitted = true;
    const data = {
      username: this.loginForm.value.username,

      password: this.loginForm.value.password,
    };

    this.authenService.login(data).subscribe(res => {
      const jwt = res.headers.get('Authorization');
      this.authenService.saveToken(jwt);
        this.authenService.getprofile().subscribe(res=>{
          console.log(res);
          this.user=res;
          this.roleuser=localStorage.getItem('role');

          this.valid=res['valid'];
    
          console.log(this.valid);

      
     
    if((this.valid == true ) || (this.roleuser === 'Candidat')){
      this.ison = true;
      localStorage.setItem('connecte', 'true');
      console.log(res);
      console.log(this.valid);

    

      this.refresh();
     }
     else{
      this.authenService.logout();
      localStorage.removeItem('iduser');
      localStorage.removeItem('role');
      localStorage.setItem('connecte', 'false');

      Swal.fire(
        'OPPs',
        'Votre compte est désactiver!',
        'error'
      );
      
     }
    }); 

      }
      , error2 => {


        Swal.fire(
          'OPPs',
          'Vérifier vos coordonnées:)',
          'error'
        );
      }
    );

    if (this.loginForm.invalid) {
      return;
    }

  }



  refresh(): void {
    window.location.reload();
  }


  recuperFile(file) {
    this.filesToUpload = file.target.files;
console.log(this.filesToUpload);
   
    this.logo= file.target.files[0]['name'];
  }

  getprofile(){
    this.authenService.getprofile().subscribe(res=>{
      console.log(res);
      this.user=res;
      this.roleuser=localStorage.getItem('role');

      localStorage.setItem('iduser',this.user['id']);
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
      this.valid=res['valid'];

      this.logo=res['logo'];
    
  
    })}
}
