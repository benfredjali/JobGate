import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { AuthentificationService } from '../authentification.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient, private authService: AuthentificationService ) {}
  getall() {

    return this.http.get(environment.url + 'formation/all');
  }
  getbyid(id) {

    return this.http.get(environment.url + 'formation/getone/'+id);
  }
  Ajouter(data,idcentre,idsecteur) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    return this.http.post(environment.url + 'formation/save/'+idsecteur+'/'+idcentre, data ,{headers: headers});
  }
  modifier(id,idsecteur,data) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    return this.http.put(environment.url + 'formation/modif/'+id+'/'+ idsecteur, data,{headers: headers});
  }


  getformation(idcentre) {
    return this.http.get(environment.url + 'formation/getbycentre/'+idcentre);
  }

  supprimer(id) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.delete(environment.url + 'formation/delete/' + id);
  }

  postuler(idformation,idcandidat,data){
    return this.http.post(environment.url+'demande/add/'+idformation+'/'+idcandidat,data);
  }
}
