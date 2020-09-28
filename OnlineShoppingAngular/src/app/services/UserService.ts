import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient)
    {

    }
  register(user:User):boolean
  {
      console.log(user.email);
      return true;
  }
  login(user:User):boolean
  {
    console.log (user);
    return true;
  }
  changePassword(user:User):boolean
  {
    console.log(user);
    return true;
  }
  changePasswordFromApi(user:User)
  {
    return this.httpCilent.get("http://localhost:64550/api/login?email="+user.email+"&password="+user.password);
  }
  loginFromApi(user:User):Observable<boolean>
  {
    return this.httpCilent.put<boolean>("http://localhost:64550/api/login?email="+user.email+"&password="+user.password,null);
  }
}