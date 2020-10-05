import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private httpClient:HttpClient,private httpClient1:HttpClient,private httpClient2:HttpClient)
    {

    }

  //Change user Password
  changePasswordFromApi(user:User)
  {
    return this.httpClient.get("http://localhost:64550/api/login?email="+user.userEmail+"&password="+user.userPassword);
  }

  //User login
  loginFromApi(user:User):Observable<User>
  {
    return this.httpClient.post<User>("http://localhost:64550/api/login?email="+user.userEmail+"&password="+user.userPassword,null);
  }

  //User registration
  signUpFromApi(user:User):Observable<boolean>
  {
    return this.httpClient.post<boolean>("http://localhost:64550/api/login",user);
  }

  //Account deactivation
  deactivateAccount(user:User)
  {
    return this.httpClient.request("delete","http://localhost:64550/api/users",{body:user});
  }

  // Update user details
  updateFromApi(user:User):Observable<boolean>
  {
    return this.httpClient2.put<boolean>("http://localhost:64550/api/users/"+user.userId,user);
  }
}