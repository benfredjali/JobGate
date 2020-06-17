import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthentificationService} from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobGate';

  constructor(private authentification: AuthentificationService) {
  }

  ngOnInit(): void {
    this.authentification.loadToken();
  }
}
