import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { OtpService } from '../services/OtpService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otpSent:boolean;
  otp:number;
  userotp:number;
  user:User;
  message:string;
  constructor(private otpService:OtpService,private userService:UserService) {
    this.otpSent=false;
    this.message="";
    this.user=new User();
   }

  ngOnInit(): void {
  }

  sendOtp()
  {
    this.otp=this.otpService.getOtp();
    if(this.otp!=0)
    {
      this.otpSent=true;
    }
    else
    {
      this.message="Email does not exsist";
    }
  }
  resendOtp()
  {
    this.otpService.resendOtp(this.otp);
    console.log("Otp sended again")
  }
  changePassword()
  {
    if(this.otp!=this.userotp)
    {
      this.userService.changePassword(this.user);
    }
    else
    {
      this.message="Invalid Otp";
    }
  }

}
