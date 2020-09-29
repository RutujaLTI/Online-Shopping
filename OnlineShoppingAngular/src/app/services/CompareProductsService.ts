import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class CompareProductsService
{
    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient)
    {

    }

    getCompareProducts():Observable<Product[]>
    {
        return this.httpCilent.get<Product[]>("http://localhost:64550/api/compareproducts");
    }

    addProductForCompare(product:Product)
    {
        return this.httpCilent1.post("http://localhost:64550/api/compareproducts",product);
    }

    removeProductFromCompare(id:number)
    {
        return this.httpCilent2.delete("http://localhost:64550/api/compareproducts/"+id);
    }
    
}