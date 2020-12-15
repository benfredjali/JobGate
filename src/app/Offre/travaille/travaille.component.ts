import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CandidatService } from 'src/app/services/candidat.service';
import {TravailleService} from '../../services/travaille.service';

@Component({
  selector: 'app-travaille',
  templateUrl: './travaille.component.html',
  styleUrls: ['./travaille.component.css']
})
export class TravailleComponent implements OnInit {
  titre = new FormControl("");
  adresse = new FormControl(""); 
  typesControle = new FormControl("");
  type = "";


  roleuser;
  prenomuser;
  nomuser;
  userconnectee;
  termTravaille;
  listtravaille;
  p=1;
  constructor(private router: Router, private authservice: AuthentificationService,private travailleservice: TravailleService,private candidatservice:CandidatService) { }

  ngOnInit() {
    this.all();
    this.roleuser=localStorage.getItem('role');
   // this.getprofile()
  }
  addfavorie(idoffer){
    this.candidatservice.addfavorie({},idoffer,localStorage.getItem('iduser')).subscribe(res=>{
      console.log(res);
    })  
    window.location.reload();
  }

  all() {
    this.travailleservice.getall().subscribe(res => {
      console.log(res);
      this.listtravaille = res;
    });

  }

  /*getprofile() {
    this.authservice.getprofile().subscribe(res => {
      console.log(res);
      this.userconnectee = res;
      localStorage.setItem('iduser', this.userconnectee.id)
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
   
  
    })
  }*/
}
