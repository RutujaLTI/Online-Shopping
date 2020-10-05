import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  user:User;
  message:string;
  constructor(private local:LocalStorageService,private userService:UserService,private router:Router) {
    this.user=this.local.retrieve('user');
    this.message="";
   }

  ngOnInit(): void {
  }

  //Returns true if user details updated successfully else false
  update()
  {
    this.userService.updateFromApi(this.user).subscribe((data)=>
    {
      if(data)
      {
        this.local.store('user',this.user);//Update local storage with new values
        this.router.navigate(['/']);
      }

      else this.message="Email or phone is already tied to an account";
    });
  }
}
