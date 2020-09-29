import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
@Injectable()
export class CategoryService{
    constructor(private httpCilent:HttpClient)
    {
        
    }
    addCategory(categoryName:string)
    {
        console.log(categoryName);
    }

    getCategories():Observable<Category[]>
    {
        return this.httpCilent.get<Category[]>("http://localhost:64550/api/category");
    }
}