import { Component, OnInit } from '@angular/core';
import { OtpService } from '../services/OtpService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otpSent:boolean;
  constructor(private otpService:OtpService) {
    this.otpSent=false;
   }

  ngOnInit(): void {
  }

  sendOtp()
  {
    this.otpSent=true;
    this.otpService.getOtp();
  }
  resendOtp()
  {
    this.otpService.resendOtp();
    console.log("Otp sended again")
  }

}
