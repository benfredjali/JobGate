import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/Formation/formation.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  listannonce;


  constructor(private offreservice: OffreService) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.offreservice.getall().subscribe(res => {
      console.log(res);
      this.listannonce = res;
    });

  }

 
}
