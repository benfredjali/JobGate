import { Component, OnInit } from '@angular/core';
import {FormationService} from '../services/Formation/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  listformation;



  constructor(private formationservice: FormationService) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.formationservice.getall().subscribe(res => {
      console.log(res);
      this.listformation = res;
    });

  }
}
