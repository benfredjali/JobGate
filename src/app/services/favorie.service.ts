import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class FavorieService {

  constructor(private http: HttpClient,private authService:AuthentificationService) { }



  getfavoriebycandidat(idcandidat) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.url + 'favorie/getfavoriebycandidat/'+idcandidat,{headers: headers});
  }

  supprimer(id) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.delete(environment.url + 'favorie/delete/' + id);
  }

  
}
