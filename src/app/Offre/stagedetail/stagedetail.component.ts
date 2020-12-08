import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PostulerService } from 'src/app/services/postuler.service';
import { StageService } from 'src/app/services/stage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stagedetail',
  templateUrl: './stagedetail.component.html',
  styleUrls: ['./stagedetail.component.css']
})
export class StagedetailComponent implements OnInit {
idstage;
fileToUpload: File = null;
stage;
listpostuler
affichcvinput=false;
user;nomuser;prenomuser;
  adresse;siteWeb;telephone;email;logo;iduser;
p=1;
  constructor(private postulersrv: PostulerService,
    private activatedroute:ActivatedRoute,private stageservice:StageService,
    private authenService:AuthentificationService ) {
    console.log(this.activatedroute.params)
    this.idstage=this.activatedroute.params['_value']['id'] 
   }

  ngOnInit(): void {
    this.getone(this.idstage);
    this.getallpostuler();
    this.getprofile();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }

  getone(id){
    this.stageservice.getone(id).subscribe(res=>{
      console.log(res)
  this.stage=res;
    })
  }
  affichcv(){
    console.log(this.affichcvinput)
    this.affichcvinput=!this.affichcvinput;
  }
postuler(){
  const formdata=new FormData();
  formdata.append('file',this.fileToUpload)
  
  this.stageservice.postuler(this.idstage,localStorage.getItem('iduser'),formdata).subscribe(res=>{
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
  
  this.postulersrv.getpostuler(this.idstage).subscribe(res=>{
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
