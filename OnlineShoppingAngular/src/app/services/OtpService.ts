import { HttpClient } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class OtpService {

  constructor(private httpClient:HttpClient)
  {

  }
  resendOtp(otp:number)
  {
    return this.httpClient.get("");
  }

  getOtp(): number {
    return 1;
  }
  getOtpfromApi(email:string):Observable<number>
  {
    return this.httpClient.get<number>("http://localhost:64550/api/otp?email="+email);
  }
  resenttOtpfromApi(email:string,otp:number)
  {
    return this.httpClient.get("http://localhost:64550/api/otp?email="+email+"&otp="+otp);
  }
}