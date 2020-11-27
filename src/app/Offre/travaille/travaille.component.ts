import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import {TravailleService} from '../../services/travaille.service';

@Component({
  selector: 'app-travaille',
  templateUrl: './travaille.component.html',
  styleUrls: ['./travaille.component.css']
})
export class TravailleComponent implements OnInit {

  termTravaille;
  listtravaille;
  p=1;
  constructor(private travailleservice: TravailleService,private candidatservice:CandidatService) { }

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
    this.travailleservice.getall().subscribe(res => {
      console.log(res);
      this.listtravaille = res;
    });

  }
}
