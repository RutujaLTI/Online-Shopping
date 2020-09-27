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
  message:string;
  constructor(private userService:UserService,private router:Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  registerUser()
  {
    if(!this.userService.register(this.user))
    {
      this.message="Email already exsists";
    }
    else
    {
      this.router.navigate(['/login']);
    }

  }

}
