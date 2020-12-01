import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/Formation/formation.service';
import { OffreService } from 'src/app/services/offre.service';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  term;
  term1;
  listannonce;
  listformation;
  listcandidat;
  p=1;

  constructor(private offreservice: OffreService, private formationservice:FormationService, private candidatservice:CandidatService) {
  }

  ngOnInit() {
    this.all();
    this.allformation()
    this.allCandidat()
   
  }

  all() {
    this.offreservice.getall().subscribe(res => {
      console.log(res);
      this.listannonce = res;
    });

  }
  allformation() {
    this.formationservice.getall().subscribe(res => {
      console.log(res);
      this.listformation = res;
    });

  }
  allCandidat() {
    this.candidatservice.getall().subscribe(res => {
      console.log(res);
      this.listcandidat = res;
    });

  }

 
}
