import { Component, OnInit } from '@angular/core';
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



  constructor(private formationservice: FormationService,
    private candidatservice:CandidatService) {
  }

  ngOnInit() {
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

}
