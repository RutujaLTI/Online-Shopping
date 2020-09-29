import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable()
export class SessionService
{
    user:User;
    constructor(private http:HttpClient,private http1:HttpClient)
    {
        this.user=null;
    }
    setUser(user:User)
    {
        return this.http.post("http://localhost:64550/api/Session",user);
    }
    public getUSer():Observable<User>
    {
        return this.http.get<User>("http://localhost:64550/api/Session");
    }

}