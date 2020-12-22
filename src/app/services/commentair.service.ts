import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentairService {


  constructor(private http: HttpClient) {
  }


  getcommentaire(idcandidat) {
    return this.http.get(environment.url + 'commentaire/getbyformation/'+idcandidat);
  }

 
  addcommentaire(data,idoffre,idcandidat){
    return this.http.post(environment.url + 'commentaire/save/'+idoffre+'/'+idcandidat,data )
  }
  
  modifcommentaire(data,id){
    return this.http.put(environment.url + 'commentaire/modif/'+id,data )
  }
  
  supprimer(id){
    return this.http.delete(environment.url + 'commentaire/delete/'+id )
  }
}
