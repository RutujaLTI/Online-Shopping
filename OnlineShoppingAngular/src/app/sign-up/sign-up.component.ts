import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  cpassword:string;
  message:string;
  constructor(private userService:UserService,private router:Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  registerUser()
  {
    if(this.cpassword!=this.user.userPassword)
    {
      this.message='Passwords do not match';
    }

    //Returns true if signup successful
    else this.userService.signUpFromApi(this.user).subscribe((data)=>
    {
      if(data)  
        this.router.navigate(['/login']); //Route to login page
      else 
        this.message="Email or phone already exists. Please login or enter a different value";
    });

  }

}
