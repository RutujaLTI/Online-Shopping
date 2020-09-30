import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currentPassword:string;
  newPassword:string;
  user:User;
  message:string;
  constructor(private local:LocalStorageService,private userService:UserService,private router:Router) { 
    this.user=this.local.retrieve('user');
    this.message='';
  }

  ngOnInit(): void {
  }
  changePassword()
  {
    if(this.currentPassword!=this.user.userPassword)this.message='Current Password is wrong';
    else
    {
      this.user.userPassword=this.newPassword;
      this.userService.changePasswordFromApi(this.user).subscribe((data)=>{
          this.local.store('user',this.user);
          this.router.navigate(['/']);
      });
    }
  }
}
