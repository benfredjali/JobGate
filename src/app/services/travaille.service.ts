import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravailleService {

  constructor(private http: HttpClient) {

  }

  getall() {

    return this.http.get(environment.url + 'travaille/all');
  }
  

  Ajouter(data,idsociete,idsecteur) {
    return this.http.post(environment.url + 'travaille/save/'+idsecteur+'/'+idsociete, data);
  }
}
