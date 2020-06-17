// import {Component, OnInit, TemplateRef} from '@angular/core';
// import {CandidatService} from '../services/candidat.service';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {ResponsableCentreService} from '../services/responsabelcentre.service';
// import {ResponsabelSocietyService} from '../services/responsabel-society.service';
//
// import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
// import {AuthentificationService} from '../services/authentification.service';
// import {MustMatch} from './must-match-directive';
// import Swal from 'sweetalert2';
// import {Router} from '@angular/router';
// import {FormationService} from '../services/formation.service';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//
//   listannonce;
//   loginForm: FormGroup;
//   registerCandidatForm: FormGroup;
//   registerSocieteForm: FormGroup;
//   registerCentreForm: FormGroup;
//   submitted = false;
//   isActiveToggleTextPassword = true;
//   modalRef: BsModalRef;
//
//
//   choix = 'candidat';
//
//   constructor(private responsableCentreService: ResponsableCentreService,
//               private modalService: BsModalService, private authenService: AuthentificationService,
//               private candudatservice: CandidatService,
//               private FormationService: formationService,
//               private formBuilder: FormBuilder, private router: Router,
//               private responsabelSocietyService: ResponsabelSocietyService) {
//     this.nom = localStorage.getItem('nom');
//     this.prenom = localStorage.getItem('prenom');
//     if (localStorage.getItem('connecte') === 'true') {
//       this.ison = true;
//     }
//   }
//
//   ngOnInit(): void {
//     this.registerCandidatForm = this.formBuilder.group({
//       nom: ['', Validators.required],
//       prenom: ['', Validators.required],
//       username: ['', Validators.required],
//       adresse: ['', Validators.required],
//       dateNaiss: ['', Validators.required],
//       niveauEtude: ['', Validators.required],
//       compteLinkedin: ['', Validators.required],
//       description: ['', Validators.required],
//       siteWeb: ['', Validators.required],
//       telephone: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmpassword: ['', Validators.required],
//
//     }, {
//       validator: MustMatch('password', 'confirmpassword')
//     });
//
//
//     this.registerSocieteForm = this.formBuilder.group({
//       nom: ['', Validators.required],
//       prenom: ['', Validators.required],
//       username: ['', Validators.required],
//       adresse: ['', Validators.required],
//       description: ['', Validators.required],
//       siteWeb: ['', Validators.required],
//       logo: ['', Validators.required],
//       telephone: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmpassword: ['', Validators.required],
//     }, {
//       validator: MustMatch('password', 'confirmpassword')
//     });
//     this.registerCentreForm = this.formBuilder.group({
//       nom: ['', Validators.required],
//       prenom: ['', Validators.required],
//       username: ['', Validators.required],
//       adresse: ['', Validators.required],
//       description: ['', Validators.required],
//       logo: ['', Validators.required],
//       siteWeb: ['', Validators.required],
//       telephone: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmpassword: ['', Validators.required],
//     }, {
//       validator: MustMatch('password', 'confirmpassword')
//     });
//
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//
//
//   }
//
//
//
//
//
//   all()
//   {
//   this.formationService.getall().subscribe(res => {
//     console.log(res);
//     this.listannonce = res;
//   });
//
//
// }
//   choisirsocite()
//   {
//   this.choix = 'societe';
//
//   }
//
//     choisircandiat()
//     {
//       this.choix = 'candidat';
//
//     }
//
//     choisircentre()
//     {
//       this.choix = 'centre';
//
//     }
//
//     openModal(template
//     :
//     TemplateRef < any >
//     )
//     {
//
//       this.modalRef = this.modalService.show(template);
//     }
//
//     get
//     b()
//     {
//       return this.loginForm.controls;
//     }
//
//     get
//     f()
//     {
//       return this.registerCandidatForm.controls;
//     }
//
//     registercandidat()
//     {
//       this.submitted = true;
//       console.log(this.registerCandidatForm.value);
//       // stop here if form is invalid
//       if (this.registerCandidatForm.invalid) {
//         return;
//       }
//
//       this.candudatservice.register(this.registerCandidatForm.value).subscribe(result => {
//         console.log(result);
//
//       });
//
//       window.location.reload();
//       this.registerCandidatForm.reset();
//
//     }
//
//
//     get
//     x()
//     {
//       return this.registerSocieteForm.controls;
//     }
//
//     registerResponsableSociete()
//     {
//       this.submitted = true;
//       console.log(this.registerSocieteForm.value);
//       // stop here if form is invalid
//       if (this.registerSocieteForm.invalid) {
//         return;
//       }
//
//       this.responsabelSocietyService.register(this.registerSocieteForm.value).subscribe(result => {
//         console.log(result);
//       });
//       this.registerSocieteForm.reset();
//
//     }
//
//     public toggleTextPassword()
//     :
//     void {
//       this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword !== true);
//     }
//
//     public
//     getType()
//     {
//       return this.isActiveToggleTextPassword ? 'password' : 'text';
//     }
//
//     get
//     v()
//     {
//       return this.registerCentreForm.controls;
//     }
//
//     reset()
//     {
//       this.submitted = false;
//       this.registerCentreForm.reset();
//     }
//
//     registerResponsableCentre()
//     {
//       this.submitted = true;
//       console.log(this.registerCentreForm.value);
//       // stop here if form is invalid
//       if (this.registerCentreForm.invalid) {
//         return;
//       }
//
//       this.responsableCentreService.register(this.registerCentreForm.value).subscribe(result => {
//         console.log(result);
//
//       });
//
//       this.reset();
//     }
//
//
//     isCandidat()
//     {
//       this.authenService.isCandidat();
//     }
//
//     isresponsableSociete()
//     {
//       this.authenService.isresponsableSociete();
//     }
//
//     isresponsableCentre()
//     {
//       this.authenService.isresponsableSociete();
//     }
//
//     onlogin()
//     {
//
//       this.submitted = true;
//       const data = {
//         username: this.loginForm.value.username,
//
//         password: this.loginForm.value.password,
//       };
//
//       this.authenService.login(data).subscribe(res => {
//
//           this.ison = true;
//           localStorage.setItem('connecte', 'true');
//           console.log(res);
//
//           const jwt = res.headers.get('Authorization');
//           this.authenService.saveToken(jwt);
//
//
//           this.refresh();
//
//
//         }
//         , error2 => {
//
//
//           Swal.fire(
//             'OPPs',
//             'Vérifier vos coordonnées:)',
//             'error'
//           );
//         }
//       );
//
//       if (this.loginForm.invalid) {
//         return;
//       }
//
//     }
//
//     refresh()
//     :
//     void {
//       window.location.reload();
//     }
//
//
//     }
//
//

import {Component, OnInit, TemplateRef} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResponsableCentreService} from '../services/responsabelcentre.service';
import {ResponsabelSocietyService} from '../services/responsabel-society.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthentificationService} from '../services/authentification.service';
import {MustMatch} from './must-match-directive';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


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


  choix = 'candidat';

  constructor(private responsableCentreService: ResponsableCentreService,
              private modalService: BsModalService,private authenService: AuthentificationService,
              private candudatservice: CandidatService,
              private formBuilder: FormBuilder,private router:Router,
              private responsabelSocietyService: ResponsabelSocietyService) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    if (localStorage.getItem('connecte') === 'true') {
      this.ison = true;
    }
  }

  ngOnInit(): void {
    this.registerCandidatForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      niveauEtude: ['', Validators.required],
      compteLinkedin: ['', Validators.required],
      description: ['', Validators.required],
      siteWeb: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],

    }, {
      validator: MustMatch('password', 'confirmpassword')
    });


    this.registerSocieteForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],
      siteWeb: ['', Validators.required],
      logo: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmpassword')
    });
    this.registerCentreForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],
      logo: ['', Validators.required],
      siteWeb: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    }, {
      validator:MustMatch('password', 'confirmpassword')
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


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

  registercandidat() {
    this.submitted = true;
    console.log(this.registerCandidatForm.value);
    // stop here if form is invalid
    if (this.registerCandidatForm.invalid) {
      return;
    }

    this.candudatservice.register(this.registerCandidatForm.value).subscribe(result => {
      console.log(result);

    });

    window.location.reload();
    this.registerCandidatForm.reset();

  }


  get x() {
    return this.registerSocieteForm.controls;
  }

  registerResponsableSociete() {
    this.submitted = true;
    console.log(this.registerSocieteForm.value);
    // stop here if form is invalid
    if (this.registerSocieteForm.invalid) {
      return;
    }

    this.responsabelSocietyService.register(this.registerSocieteForm.value).subscribe(result => {
      console.log(result);
    });
    this.registerSocieteForm.reset();

  }

  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword !== true);
  }

  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  get v() {
    return this.registerCentreForm.controls;
  }

  reset() {
    this.submitted = false;
    this.registerCentreForm.reset();
  }

  registerResponsableCentre() {
    this.submitted = true;
    console.log(this.registerCentreForm.value);
    // stop here if form is invalid
    if (this.registerCentreForm.invalid) {
      return;
    }

    this.responsableCentreService.register(this.registerCentreForm.value).subscribe(result => {
      console.log(result);

    });

    this.reset();
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



}
