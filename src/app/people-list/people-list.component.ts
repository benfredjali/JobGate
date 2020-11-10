import { Component, OnInit } from '@angular/core';

//import { UserService } from '../user.service';
import { from } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  usersList = [];

  myForm: FormGroup;

  constructor(  private formbuilder: FormBuilder ) {

    let formControlls= {
      name: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
        ])
      //price: new FormControl()
    }
    this.myForm= this.formbuilder.group(formControlls)
   }

   get name(){
     return this.myForm.get('name');
   }

  ngOnInit(): void {

/*     this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result;
      },
    error => {
      console.log(error);
    }
   ) */
  }

/* 
  delete(id){

    let index = this.usersList.indexOf(id);
    this.usersList.splice(index, 1);
    this.userService.deleteUsers(id).subscribe(
      res => {

        console.log(res);

      },
    err => {

      console.log(err);

    }
    )
  } */

  save(){
    console.log(this.myForm.value);
  }


}
