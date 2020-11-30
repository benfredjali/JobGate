import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TravailleService {

  constructor(private http: HttpClient,private authService:AuthentificationService) {

  }
  postuler(idoffer,idcandidat,data){
    return this.http.post(environment.url+'postuler/add/'+idoffer+'/'+idcandidat,data);
  }
  getall() {

    return this.http.get(environment.url + 'travaille/all');
  }
  getone(id)
{
  return this.http.get(environment.url+'travaille/getone/'+id);
}
  Ajouter(data,idsociete,idsecteur) {
    return this.http.post(environment.url + 'travaille/save/'+idsecteur+'/'+idsociete, data);
  }
 getoffre(idoffre) {
    return this.http.get(environment.url + 'formation/getbycentre/'+idoffre);
  }

  gettravaille(idsociete) {
    return this.http.get(environment.url + 'travaille/getbytravaille/'+idsociete);
  }

  supprimer(id) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.delete(environment.url + 'formation/delete/' + id);
  }

}
