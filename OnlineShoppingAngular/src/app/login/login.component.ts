import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/UserService';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  user:User;
  message:string;
  constructor(private userService:UserService,private router:Router,private localStorage:LocalStorageService) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  login() //Returns user object if login successful else null
  {
    this.userService.loginFromApi(this.user).subscribe((data)=>
    {
      if(data!=null) {
        this.localStorage.store('user',data); //Store user object in localstorage for the session
        this.router.navigate(['']); //Route to homepage
      }
      else 
        this.message="Incorrect username or password";
    });
  }

}
