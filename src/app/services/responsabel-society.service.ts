import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { AuthentificationService } from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class ResponsabelSocietyService {

  constructor(private http: HttpClient,private authService:AuthentificationService) {
  }
  getall() {

    return this.http.get(environment.url + 'responsableSociete/all');
}
  register(data) {
    return this.http.post(environment.url + 'responsableSociete/save', data);
}
getbyid(id) {

  return this.http.get(environment.url + 'responsableSociete/getone/'+id);
}

modifier(id,data){
  return this.http.put(environment.url + 'responsablesociete/modif/'+id ,data)
}

}
