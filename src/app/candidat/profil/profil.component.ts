import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user;
  nomuser;
  prenomuser;
  photo;
  logo; niveauEtude;
  compteLinkedin;
  telephone;
  email;

  constructor(private imageservice:ImageService,private authenService: AuthentificationService,
    private candudatservice: CandidatService, private router:Router) {}

  ngOnInit(): void {

    this.getprofile();

    
  }
  getprofile(){
    this.authenService.getprofile().subscribe(res=>{
      console.log(res);
      this.user=res;
      localStorage.setItem('iduser',this.user['id']);
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
      this.niveauEtude=res['niveauEtude'];
      this.compteLinkedin=res['compteLinkedin'];
      this.telephone=res['telephone'];
      this.email=res['email'];


      this.photo=res['photo'];
      this.logo=res['logo'];
    
  
    })}
    deconecter() {

      this.authenService.logout();
      localStorage.setItem('connecte', 'false');
      window.location.reload();
    }
}
