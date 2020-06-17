import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  constructor(private http: HttpClient ) { }

  getall() {

    return this.http.get(environment.url + 'secteur/all');
  }
  Ajouter(data) {
    return this.http.post(environment.url + 'secteur/save/', data);
  }
}
