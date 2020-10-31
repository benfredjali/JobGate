import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  
  getall() {

    return this.http.get(environment.url + 'offre/all');
  }
}
