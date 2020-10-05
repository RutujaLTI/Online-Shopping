import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class OtpService {

  constructor(private httpClient:HttpClient)
  {

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