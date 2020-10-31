import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  pushFileToStorag(folder: FileList): Observable<HttpEvent<{}>> {
    const formData = new FormData();

    Array.from(folder).forEach(file => {
      formData.append("file", file);
    });

    const req = new HttpRequest('POST', 'http://localhost:8080/upload/post', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

 
 
  /* uploadFolder(folder: FileList): Observable<HttpEvent<{}>> {
    const formData = new FormData();

    Array.from(folder).forEach(file => {
      formData.append("file", file);
    });

    return this.upload(formData);
  } */
  uploadFile(file): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    formdata.append("file", file);

    const req = new HttpRequest('POST', 'http://localhost:8080/upload/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }


}
