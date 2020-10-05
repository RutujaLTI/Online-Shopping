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
  cPassword:string;
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
    if(this.currentPassword!=this.user.userPassword)
      this.message='Incorrect current password';

    if(this.cPassword!=this.newPassword)
      this.message='Please retype password correctly';
      
    else
    {
      this.user.userPassword=this.newPassword;
      this.userService.changePasswordFromApi(this.user).subscribe((data)=>{
          this.local.store('user',this.user); //Update the localstorage with new values
          this.router.navigate(['/']);
      });
    }
  }
}
