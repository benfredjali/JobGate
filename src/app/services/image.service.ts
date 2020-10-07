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

 
  private upload(formData: FormData): Observable<HttpEvent<{}>> {
    const request = new HttpRequest("POST", 'http://localhost:8080/upload/post', formData, {
      reportProgress: true,
      responseType: "text"
    });

    return this.http.request(request);
  }
  /* uploadFolder(folder: FileList): Observable<HttpEvent<{}>> {
    const formData = new FormData();

    Array.from(folder).forEach(file => {
      formData.append("file", file);
    });

    return this.upload(formData);
  } */
 
  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append("data", file);

    return this.upload(formData);
  }


}
