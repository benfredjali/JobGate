import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-candidat-single',
  templateUrl: './candidat-single.component.html',
  styleUrls: ['./candidat-single.component.css']
})
export class CandidatSingleComponent implements OnInit {
  idcandidat;
  candidat;
  constructor(private activatedroute:ActivatedRoute,private candidatservice:CandidatService) {
    console.log(this.activatedroute.params)
    this.idcandidat=this.activatedroute.params['_value']['id'] 
   }

  ngOnInit(): void {
    this.getone(this.idcandidat);

  }
  getone(id){
    this.candidatservice.getbyid(id).subscribe(res=>{
      console.log(res)
  this.candidat=res;
    })
  }
}
