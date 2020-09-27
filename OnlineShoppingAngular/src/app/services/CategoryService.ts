import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class CategoryService{
    constructor(private httpCilent:HttpClient)
    {
        
    }
    addCategory(categoryName:string)
    {
        console.log(categoryName);
    }
}