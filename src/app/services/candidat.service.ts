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

  register(data) {
    return this.http.post(environment.url + 'candidat/save', data);
  }
}
