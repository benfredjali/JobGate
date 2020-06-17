import { Component, OnInit } from '@angular/core';
import {StageService} from '../../services/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  liststage;
  constructor(private stageservice: StageService) { }

  ngOnInit() {
    this.all();
  }

  all() {
    this.stageservice.getall().subscribe(res => {
      console.log(res);
      this.liststage = res;
    });

  }
}
