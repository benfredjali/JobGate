import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/Formation/formation.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  listannonce;


  constructor(private formationservice: FormationService) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.formationservice.getall().subscribe(res => {
      console.log(res);
      this.listannonce = res;
    });

  }
}
