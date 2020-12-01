import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient,private authService:AuthentificationService) {
  }

  getall() {
    return this.http.get(environment.url + 'candidat/all');
  }
  getfavoriebycandidat(idcandidat) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.url + 'favorie/getfavoriebycandidat/'+idcandidat,{headers: headers});
  }

  register(data) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.post(environment.url + 'candidat/save', data);
  }
  addfavorie(data,idoffre,idcandidat){
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});

    return this.http.post(environment.url + 'favorie/save/'+idoffre+'/'+idcandidat,data,{headers: headers} )
  }

  modifier(id,data){
    return this.http.put(environment.url + 'candidat/modif/'+id ,data)
  }

  getbyid(id) {

    return this.http.get(environment.url + 'candidat/getone/'+id);
  }
}
