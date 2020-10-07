import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) {

  }

  getall() {

    return this.http.get(environment.url + 'stage/all');
  }

  Ajouter(data,idsociete,idsecteur) {
    return this.http.post(environment.url + 'formation/save/'+idsecteur+'/'+idsociete, data);
  }
}