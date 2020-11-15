import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listcandidat;
  term;
  constructor( private candidatservice: CandidatService) { }

  ngOnInit(): void {

    this.all() 
  }
  
  all() {
    this.candidatservice.getall().subscribe(res => {
      console.log(res);
      this.listcandidat = res;
    });

  }

}
