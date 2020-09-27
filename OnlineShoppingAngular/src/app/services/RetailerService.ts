import { Injectable } from "@angular/core";
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable()
export class RetailerService{
    constructor(private httpCilent:HttpClient)
    {
        
    }
    delete(id:number)
    {

    }
    register(user:User):boolean
    {
        return true;
    }
}