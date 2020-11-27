import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsableCentreService {

  constructor(private http: HttpClient,private authService:AuthentificationService) {
  }
  getall() {
    return this.http.get(environment.url + 'responsableCentre/all');
  }

  register(data) {

    return this.http.post(environment.url + 'responsableCentre/save', data);
  }
  getbyid(id) {

    return this.http.get(environment.url + 'responsableCentre/getone/'+id);
  }
  
  modifier(id,data){
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.put(environment.url + 'responsableCentre/modif/'+id ,data,{headers: headers} )
  }
  
}
