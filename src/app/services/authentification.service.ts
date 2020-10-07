import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {JwtHelperService} from '@auth0/angular-jwt';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:8080/';
  jwt: string;
  username: string;
  public roles;


  private var;

  login(data) {
// bech yjib lhedar de la requet post
    return this.http.post(this.url + 'login', data, {observe: 'response'});

  }


  parseJWT() {

    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    localStorage.setItem('role',this.roles)

    //localStorage permet de recuperer le role de user
   // localStorage.setItem('role', this.roles)
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    //localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }


// getProfil pour recupere l'utilisateur qui a connecté.
  getprofile() {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});

    return this.http.get(environment.url + 'user/byiduser', {headers: headers})
  }

  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isCandidat() {
    return this.roles.indexOf('Candidat') >= 0;

  }

  isresponsableSociete() {
    return this.roles.indexOf('responsableSociete') >= 0;

  }

  isresponsableCentre() {
    return this.roles.indexOf('responsableCentre') >= 0;

  }

  isAuthenticated() {

    return this.roles && (this.isAdmin() || this.isCandidat() || this.isresponsableSociete() || this.isresponsableCentre());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }


  logout() {
    localStorage.removeItem('token');
   // localStorage.removeItem('token');
    this.initParams();

  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
