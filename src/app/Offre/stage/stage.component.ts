import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import {StageService} from '../../services/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  liststage;
  term;

  constructor(private stageservice: StageService,private candidatservice:CandidatService) { }

  ngOnInit() {
    this.all();
  }
  addfavorie(idoffer){
    this.candidatservice.addfavorie({},idoffer,localStorage.getItem('idusser')).subscribe(res=>{
      console.log(res);
    })  }
  all() {
    this.stageservice.getall().subscribe(res => {
      console.log(res);
      this.liststage = res;
    });

  }

}
