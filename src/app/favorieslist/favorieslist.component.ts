import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router, private favorieservice: FavorieService) { }

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
      
    });
    window.location.reload();
    
  }

}
