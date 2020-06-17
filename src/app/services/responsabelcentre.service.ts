import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponsableCentreService {

  constructor(private http: HttpClient) {
  }
  getall() {
    return this.http.get(environment.url + 'responsableCentre/all');
  }

  register(data) {

    return this.http.post(environment.url + 'responsableCentre/save', data);
  }
}
