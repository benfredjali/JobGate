import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FavorieService } from '../services/favorie.service';

@Component({
  selector: 'app-favorieslist',
  templateUrl: './favorieslist.component.html',
  styleUrls: ['./favorieslist.component.css']
})
export class FavorieslistComponent implements OnInit {
  listfavoriebycandidat;
  id;
  p=1;
  constructor(private toastr: ToastrService,private router:Router, private favorieservice: FavorieService) { }

  ngOnInit(): void {
    this.getfavoriebycandidat();
    
  }
  
  getfavoriebycandidat(){
    this.favorieservice.getfavoriebycandidat(localStorage.getItem('iduser')).subscribe(res=>{
      console.log(res);
      this.listfavoriebycandidat=res;
    })

  }

  supprimer(id) {
    this.favorieservice.supprimer(id).subscribe(res => {
      console.log(res);
      this.toastr.error(' Favorie Supprimé  !', 'Merci!', { timeOut: 4000, });
      
    });
    window.location.reload();
    
  }

}
