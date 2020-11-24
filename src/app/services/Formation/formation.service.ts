import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient ) {}
  getall() {

    return this.http.get(environment.url + 'formation/all');
  }
  getbyid(id) {

    return this.http.get(environment.url + 'formation/getone/'+id);
  }
  Ajouter(data,idcentre,idsecteur) {
    return this.http.post(environment.url + 'formation/save/'+idsecteur+'/'+idcentre, data);
  }
  Modifier(data,idcentre,idsecteur) {
    return this.http.post(environment.url + 'formation/modif/'+idsecteur+'/'+idcentre, data);
  }
  ajouter(id, data) {
    return this.http.post(environment.url + 'stage/add/' + id, data)
  }

  // getone(id){
  //   let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
  //
  //   return this.http.get(environment.url + 'formation/getone/'+id, {headers:headers});
  // }


 


}
