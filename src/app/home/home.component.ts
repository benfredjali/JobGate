
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

    this.registerCandidatForm = this.formBuilder.group({
      nom: ['', Validators.pattern("[a-z .']+")],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      niveauEtude: ['', Validators.required],
      compteLinkedin: ['', Validators.required],
      description: ['', Validators.required],

      //siteWeb: ['', Validators.required],
      telephone: ['', Validators.required],
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
      prenom: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      adresse: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-z .'-]+"),Validators.minLength(5)
      ])),
      description: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-z .'-]+"),Validators.minLength(5)
      ])),
      siteWeb: ['', Validators.required],
      telephone:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-z .'-]+"),Validators.minLength(6)
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
      prenom: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z .'-]+"),Validators.minLength(2)
      ])),
      adresse: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-z .'-]+"),Validators.minLength(5)
      ])),
      description: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-z .'-]+"),Validators.minLength(5)
      ])),
      siteWeb: ['', Validators.required],
      telephone:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[a-z .'-]+"),Validators.minLength(6)
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
     // photo: this.filesToUpload[0].name,
      telephone: this.registerCandidatForm.value["telephone"],
      email: this.registerCandidatForm.value["email"],
      password: this.registerCandidatForm.value["password"],
      confirmpassword: this.registerCandidatForm.value["confirmpassword"],

    }

    this.submitted = true;
    console.log(this.registerCandidatForm.value);
    // stop here if form is invalid
    if (this.registerCandidatForm.invalid) {
      return;
    }

    this.candudatservice.register(data).subscribe(result => {
      console.log(result);
     
     /* this.imageservice.uploadFile(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
       
      });*/


    });
  
   //window.location.reload();
    this.registerCandidatForm.reset();

  }



  registerResponsableSociete() {

    const data = {
      nom: this.registerSocieteForm.value["nom"],
      prenom: this.registerSocieteForm.value["prenom"],
      username: this.registerSocieteForm.value["username"],
      adresse: this.registerSocieteForm.value["adresse"],
      description: this.registerSocieteForm.value["description"],
      siteWeb: this.registerSocieteForm.value["siteWeb"],
     // logo: this.filesToUpload[0].name,
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
      this.toastr.success('successful registration', 'Welcome!');

      console.log(result);
      this.toastr.success('successful registration', 'Welcome!');

     
    /*  this.imageservice.uploadFile(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
       
      });*/


    });
  
   //window.location.reload();
    this.registerSocieteForm.reset();

  }


  
  registerResponsableCentre() {
    const data = {
      nom: this.registerCentreForm.value["nom"],
      prenom: this.registerCentreForm.value["prenom"],
      username: this.registerCentreForm.value["username"],
      adresse: this.registerCentreForm.value["adresse"],
      description: this.registerCentreForm.value["description"],
      siteWeb: this.registerCentreForm.value["siteWeb"],
      //photo: this.filesToUpload[0].name,
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
      this.toastr.success('successful registration', 'Toastr fun!');
      console.log(result);
      this.toastr.success('successful registration', 'Toastr fun!');

     /* this.imageservice.uploadFile(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
       
      });*/


    });
    this.registerCentreForm.reset(); 
  // window.location.reload();
  // this.toastr.success('successful ali registration', 'Toastr fun!');


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

  onlogin() {

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

  }

  refresh(): void {
    window.location.reload();
  }


  recuperFile(file) {
    this.filesToUpload = file.target.files;
console.log(this.filesToUpload);
    this.photo = file.target.files[0]['name'];
    //this.logo= file.target.files[0]['name'];
  }
}
