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
  getOtpfromApi():Observable<number>
  {
    return this.httpClient.get<number>("");
  }
}