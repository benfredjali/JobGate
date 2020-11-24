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
  p=1;

  constructor(private stageservice: StageService,private candidatservice:CandidatService) { }

  ngOnInit() {
    this.all();
  }
  addfavorie(idoffer){
    this.candidatservice.addfavorie({},idoffer,localStorage.getItem('iduser')).subscribe(res=>{
      console.log(res);
    })  
    window.location.reload();
  }
  all() {
    this.stageservice.getall().subscribe(res => {
      console.log(res);
      this.liststage = res;
    });

  }

}
