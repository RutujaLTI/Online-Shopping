import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class CategoryService{
    constructor(private httpCilent:HttpClient)
    {
        
    }
    addCategory(categoryName:string)
    {
        console.log(categoryName);
    }
    addCategoryFromApi(categoryName:string):Observable<boolean>
    {
        return this.httpCilent.post<boolean>("http://localhost:64550/api/category?category="+categoryName,null);
    }
}