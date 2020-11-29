import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CommentairService } from '../services/commentair.service';
import { FormationService } from '../services/Formation/formation.service';

@Component({
  selector: 'app-formationdetail',
  templateUrl: './formationdetail.component.html',
  styleUrls: ['./formationdetail.component.css']
})
export class FormationdetailComponent implements OnInit {
idformation;
fileToUpload: File = null;
formation;
listcommentaire;
myForm: FormGroup;
roleuser;
p=1;


constructor(private activatedroute:ActivatedRoute,  private formbuilder: FormBuilder,private formationservice:FormationService,private commentaire:CommentairService) { 
   
  console.log(this.activatedroute.params)
    this.idformation=this.activatedroute.params['_value']['id'] 
   
  }

  ngOnInit(): void {
    this.roleuser=localStorage.getItem('role');
    this.getone(this.idformation);
    this.getallcomentaire();
    this.myForm=this.formbuilder.group({
      description:['',Validators.required]
    })
   }

getone(id){
  this.formationservice.getbyid(id).subscribe(res=>{
    console.log(res)
this.formation=res;
  })
}
 savecommentaire(){
  const data={ description: this.myForm.value["description"],}
  console.log(data)

    this.commentaire.addcommentaire(data,this.idformation,localStorage.getItem('iduser')).subscribe(res=>{
      console.log(res);
      this.getallcomentaire();
    }) 
    this.myForm.reset();   
} 
getallcomentaire(){
  
  this.commentaire.getcommentaire(this.idformation).subscribe(res=>{
    console.log(res);
    this.listcommentaire=res;
  })
}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  console.log(this.fileToUpload);

}


postuler(){
  const formdata=new FormData();
  formdata.append('file',this.fileToUpload)
  
  this.formationservice.postuler(this.idformation,localStorage.getItem('iduser'),formdata).subscribe(res=>{
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
