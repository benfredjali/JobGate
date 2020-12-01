import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostulerService {

  constructor(private http: HttpClient) {
  }


  getpostuler(idcandidat) {
    return this.http.get(environment.url + 'postuler/getbyoffre/'+idcandidat);
  }
  

  deletecommentaire(id){
    return this.http.delete(environment.url + 'commentaire/delete/'+id )
  }
}
