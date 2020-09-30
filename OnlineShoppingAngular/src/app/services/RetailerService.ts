import { Injectable } from "@angular/core";
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Retailer } from '../models/retailer';
@Injectable()
export class RetailerService{
    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient)
    {
        
    }
    delete(id:number)
    {

    }
    register(user:User):boolean
    {
        return true;
    }
    registerFromApi(user:User):Observable<boolean>
    {
        return this.httpCilent.post<boolean>("http://localhost:64550/api/retailer",user);
    }
    deleteFromApi(id:number)
    {
        return this.httpCilent.delete("http://localhost:64550/api/retailer/"+id);
    }

    getRevenue(id:number):Observable<Retailer>
    {
        return this.httpCilent1.get<Retailer>("http://localhost:64550/api/retailer/"+id);
    }

    

}