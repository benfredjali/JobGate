import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjouterFormationService {

  constructor(private http: HttpClient ) { }


    //   Ajouter(data,id,idcenter) {
    //
    //     return this.http.post(environment.url + 'formation/save/'+idsecteur+'/'+idcenter, data);
    // }
    }
