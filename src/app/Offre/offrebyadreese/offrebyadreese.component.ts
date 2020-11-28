import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offrebyadreese',
  templateUrl: './offrebyadreese.component.html',
  styleUrls: ['./offrebyadreese.component.css']
})
export class OffrebyadreeseComponent implements OnInit {
  termTravaille;
  p=1;
  listtravaille;
  adresse;
  constructor(private offerservice:OffreService,private activatedroute:ActivatedRoute) { 
    this.adresse=this.activatedroute.params['_value']['adresse']
  }

  ngOnInit(): void {
    this.getallbyadresse(this.adresse)
  }
getallbyadresse(adresse){
  this.offerservice.getallbyadresse(adresse).subscribe(res=>{
    this.listtravaille=res;

  })
}
}
