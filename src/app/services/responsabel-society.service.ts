import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResponsabelSocietyService {

  constructor(private http: HttpClient) {
  }
  getall() {

    return this.http.get(environment.url + 'responsableSociete/all');
}
  register(data) {
    return this.http.post(environment.url + 'responsableSociete/save', data);
}

}
