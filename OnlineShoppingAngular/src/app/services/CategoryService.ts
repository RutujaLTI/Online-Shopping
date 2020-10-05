import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
@Injectable()
export class CategoryService{
    constructor(private httpCilent:HttpClient)
    {
        
    }

    //Get all categories
    getCategories():Observable<Category[]>
    {
        return this.httpCilent.get<Category[]>("http://localhost:64550/api/category");
    }

    //Add category in db
    addCategoryFromApi(categoryName:string):Observable<boolean>
    {
        return this.httpCilent.post<boolean>("http://localhost:64550/api/category?category="+categoryName,null);
    }
}