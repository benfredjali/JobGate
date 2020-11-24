import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) {

  }
  postuler(idoffer,idcandidat,data){
    return this.http.post(environment.url+'postuler/add/'+idoffer+'/'+idcandidat,data);
  }
  getone(id)
{
  return this.http.get(environment.url+'stage/getone/'+id);
}
  getall() {

    return this.http.get(environment.url + 'stage/all');
  }

  Ajouter(data,idsociete,idsecteur) {
    return this.http.post(environment.url + 'stage/save/'+idsecteur+'/'+idsociete, data);
  }
}
