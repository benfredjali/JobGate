import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  listcandidat;
  constructor(private candudatservice: CandidatService) { }

  ngOnInit(): void {
    this.all();
  }
  all() {
    this.candudatservice.getall().subscribe(res => {
      console.log(res);
      this.listcandidat = res;
    });

  }

}
