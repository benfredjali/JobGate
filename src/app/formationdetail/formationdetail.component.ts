import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../services/authentification.service';
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
roleuser;iduser;
p=1;
user;nomuser;roluser;


constructor(private activatedroute:ActivatedRoute,
   private router:Router,private toastr: ToastrService,  private formbuilder: FormBuilder,private formationservice:FormationService,
   private commentaire:CommentairService,private authenService:AuthentificationService) { 
   
  console.log(this.activatedroute.params)
    this.idformation=this.activatedroute.params['_value']['id'] 
   
  }

  ngOnInit(): void {
    this.getprofile();
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

supprimer(id) {
  this.commentaire.supprimer(id).subscribe(res => {
    console.log(res);

    this.toastr.error(' Commentaire Supprimé  !', 'Merci!', { timeOut: 3000, });
    this.getallcomentaire();
    
  });
  
  //window.location.reload();
  
}
getprofile(){
  this.authenService.getprofile().subscribe(res=>{
    console.log(res);
    this.user=res;
    this.roleuser=localStorage.getItem('role');

    this.iduser= localStorage.getItem('iduser');
    this.nomuser=res['nom'];

  

  })}

}
