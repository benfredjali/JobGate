import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient,private authService:AuthentificationService) { }

  
  getall() {

    return this.http.get(environment.url + 'offre/all');
  }
  getallbyadresse(adresse) {

    return this.http.get(environment.url + 'offre/findbyadresse/' +adresse);
  }
  getoffre(idoffre) {
    return this.http.get(environment.url + 'offre/getbycentre/'+idoffre);
  }
  supprimer(id) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.delete(environment.url + 'offre/delete/' + id);
  }
  
 
}
