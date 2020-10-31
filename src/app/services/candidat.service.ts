import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'candidat/all');
  }
  getfavoriebycandidat(idcandidat) {
    return this.http.get(environment.url + 'favorie/getfavoriebycandidat/'+idcandidat);
  }

  register(data) {
    return this.http.post(environment.url + 'candidat/save', data);
  }
  addfavorie(data,idoffre,idcandidat){
    return this.http.post(environment.url + 'favorie/save/'+idoffre+'/'+idcandidat,data )
  }
}
