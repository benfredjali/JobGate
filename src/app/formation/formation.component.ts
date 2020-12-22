import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { CandidatService } from '../services/candidat.service';
import {FormationService} from '../services/Formation/formation.service';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  listformation;
  p=1;
  nomuser;roleuser;user;
  titre = new FormControl("");
  adresse = new FormControl(""); 


  constructor(private formationservice: FormationService,
    private candidatservice:CandidatService, private authenService: AuthentificationService) {
  }

  ngOnInit() {
    this.getprofile();
    this.all();
    this.onShowLog();
  }
  log = 0;
  showLog = false;

  onShowLog(){
       this.showLog = true;
       return this.log = this.log + 1;
  }
  all() {
    this.formationservice.getall().subscribe(res => {
      console.log(res);
      this.listformation = res;
    });

  }
//   addfavorie(idoffer){
// this.candidatservice.addfavorie({},idoffer,localStorage.getItem('idusser')).subscribe(res=>{
//   console.log(res);
// })  }

getprofile(){
  this.authenService.getprofile().subscribe(res=>{
    console.log(res);
    this.user=res;
    this.roleuser=localStorage.getItem('role');

    localStorage.setItem('iduser',this.user['id']);
    this.nomuser=res['nom'];

  

  })}

}
