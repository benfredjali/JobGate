import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offrebytitre',
  templateUrl: './offrebytitre.component.html',
  styleUrls: ['./offrebytitre.component.css']
})
export class OffrebytitreComponent  implements OnInit {
  termTravaille;
 term1;
  p=1;
  listtravaille;
  adresse;
  titre;
  constructor(private offerservice:OffreService,private activatedroute:ActivatedRoute) { 
 // this.adresse=this.activatedroute.params['_value']['adresse']
   this.titre=this.activatedroute.params['_value']['titre']

  }

  ngOnInit(): void {
   // this.getallbyadresse(this.adresse)
    this.getallbytitre(this.titre)
  }
getallbyadresse(adresse){
  this.offerservice.getallbyadresse(adresse).subscribe(res=>{
    this.listtravaille=res;

  })
}
getallbytitre(titre){
  this.offerservice.getallbytitre(titre).subscribe(res=>{
    this.listtravaille=res;

  })
}
}
