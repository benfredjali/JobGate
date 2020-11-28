import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravailleService } from 'src/app/services/travaille.service';

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
    constructor(private activatedroute:ActivatedRoute,private travailleservice:TravailleService ) {
      console.log(this.activatedroute.params)
      this.idtravaille=this.activatedroute.params['_value']['id'] 
     }
  
    ngOnInit(): void {
      this.getone(this.idtravaille);
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
  }
  }
  