import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PostulerService } from 'src/app/services/postuler.service';
import { TravailleService } from 'src/app/services/travaille.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-travaildetail',
  templateUrl: './travaildetail.component.html',
  styleUrls: ['./travaildetail.component.css']
})
export class TravaildetailComponent implements OnInit {
  idtravaille;
  fileToUpload: File = null;
  travaille;
  affichcvinput=false;
  listpostuler;user;nomuser;prenomuser;
  adresse;siteWeb;telephone;email;logo;iduser;
  p=1;
    constructor(private activatedroute:ActivatedRoute,
      private travailleservice:TravailleService, private postulersrv:PostulerService,
      private authenService:AuthentificationService) {
      console.log(this.activatedroute.params)
      this.idtravaille=this.activatedroute.params['_value']['id'] 
     }
  
    ngOnInit(): void {
      this.getone(this.idtravaille);
      this.getallpostuler();
      this.getprofile()
    }
    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      console.log(this.fileToUpload);
  
    }
  
    getone(id){
      this.travailleservice.getone(id).subscribe(res=>{
        console.log(res)
    this.travaille=res;
      })
    }
    affichcv(){
      console.log(this.affichcvinput)
      this.affichcvinput=!this.affichcvinput;
    }
  postuler(){
    const formdata=new FormData();
    formdata.append('file',this.fileToUpload)
    
    this.travailleservice.postuler(this.idtravaille,localStorage.getItem('iduser'),formdata).subscribe(res=>{
      console.log(res);
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Demande envoyé avec succées',
      showConfirmButton: false,
      timer: 1500
    })
  
  }


  getallpostuler(){
  
    this.postulersrv.getpostuler(this.idtravaille).subscribe(res=>{
      console.log(res);
      this.listpostuler=res;
    })
  }

  getprofile(){
    this.authenService.getprofile().subscribe(res=>{
      console.log(res);
      this.user=res;
     this.iduser= localStorage.getItem('iduser');
      this.nomuser=res['nom'];
      this.prenomuser=res['prenom'];
      this.adresse=res['adresse'];
      this.siteWeb=res['siteWeb'];
      this.telephone=res['telephone'];
      this.email=res['email'];
      this.logo=res['logo'];
    
  
    })}
  }
  