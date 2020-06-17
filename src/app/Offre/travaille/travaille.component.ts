import { Component, OnInit } from '@angular/core';
import {TravailleService} from '../../services/travaille.service';

@Component({
  selector: 'app-travaille',
  templateUrl: './travaille.component.html',
  styleUrls: ['./travaille.component.css']
})
export class TravailleComponent implements OnInit {

  listtravaille;
  constructor(private travailleservice: TravailleService) { }

  ngOnInit() {
    this.all();
  }

  all() {
    this.travailleservice.getall().subscribe(res => {
      console.log(res);
      this.listtravaille = res;
    });

  }
}
