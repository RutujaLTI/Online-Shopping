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

  login()
  {
    this.userService.loginFromApi(this.user).subscribe((data)=>
    {
      if(data!=null) {
        this.localStorage.store('user',data);
        this.router.navigate(['']);
      }
      else this.message="Invalid username or password";
    });
  }

}
