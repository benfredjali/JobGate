import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
affichcvinput=false;
  constructor(private activatedroute:ActivatedRoute,private stageservice:StageService ) {
    console.log(this.activatedroute.params)
    this.idstage=this.activatedroute.params['_value']['id'] 
   }

  ngOnInit(): void {
    this.getone(this.idstage);
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
}
