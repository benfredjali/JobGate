import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResponsabelSocietyService} from '../../services/responsabel-society.service';
import {CandidatService} from '../../services/candidat.service';
import {ResponsableCentreService} from '../../services/responsabelcentre.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {UtilisateurService} from '../../services/utilisateur.service';
import {AuthentificationService} from '../../services/authentification.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connecter;
  ison;
  nomuser;
  iduser;
  roleuser;
  prenomuser;
  photo;
  logo;
  user;
  registerCandidatForm: FormGroup;
  registerSocieteForm: FormGroup;
  registerCentreForm: FormGroup;
  submitted = false;
  isActiveToggleTextPassword = true;
  modalRef: BsModalRef;
  choix = 'candidat';
listfavoriebycandidat;
  constructor(private responsableCentreService: ResponsableCentreService, private modalService: BsModalService,
              private candudatservice: CandidatService,
              private formBuilder: FormBuilder, private authenService: AuthentificationService,
              private responsabelSocietyService: ResponsabelSocietyService,private counterService: CounterService) {
    if (localStorage.getItem('connecte') === 'true') {
      this.ison = true;
    } else {
      this.ison = false
    }
    console.log(this.ison)
  }

  ngOnInit(): void {
    this.getfavoriebycandidat();
    this.roleuser=localStorage.getItem('role');
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
      /*acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmpassword')*/
    });
this.getprofile();

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
      /*acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmpassword')*/
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
      /*acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.MustMatch('password', 'confirmpassword')*/
    });

  }
getfavoriebycandidat(){
  this.candudatservice.getfavoriebycandidat(localStorage.getItem('iduser')).subscribe(res=>{
    console.log(res);
    this.listfavoriebycandidat=res;
  })
}
  choisirsocite() {
    this.choix = 'societe';

  }

  deconecter() {

    this.authenService.logout();
    localStorage.setItem('connecte', 'false');
    localStorage.removeItem('iduser');
    localStorage.removeItem('role');
    window.location.reload();
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
    this.modalRef.hide();

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
    this.modalRef.hide();

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
  
  public getCount() {
    return this.counterService.count
  }
  public incCount(){
    this.counterService.count += 1;
  }
  
getprofile(){
  this.authenService.getprofile().subscribe(res=>{
    console.log(res);
    this.user=res;
    localStorage.setItem('iduser',this.user['id']);
    this.nomuser=res['nom'];
    this.prenomuser=res['prenom'];
    this.photo=res['photo'];
    this.logo=res['logo'];
  

  })}

  //   MustMatch(controlName: string, matchingControlName: string) {
  //     return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //
  //    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //      return;
  //    }
  //
  // //set error on matchingControl if validation fails
  //    if (control.value !== matchingControl.value) {
  //     matchingControl.setErrors({mustMatch: true});
  //   } else {
  //       matchingControl.setErrors(null);
  //    }
  //   };
  //  }

}
