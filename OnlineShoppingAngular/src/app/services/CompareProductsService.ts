import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class CompareProductsService
{
    constructor(private httpClient:HttpClient,private httpClient1:HttpClient,private httpClient2:HttpClient)
    {

    }

    //Get compare products list for the user
    getCompareProducts():Observable<Product[]>
    {
        return this.httpClient.get<Product[]>("http://localhost:64550/api/compareproducts");
    }

    //Add the product in compare list
    addProductForCompare(product:Product)
    {
        return this.httpClient1.post("http://localhost:64550/api/compareproducts/"+product.productId,null);
    }

    //Remove a particular product from compare
    removeProductFromCompare(id:number)
    {
        return this.httpClient2.delete("http://localhost:64550/api/compareproducts/"+id);
    }

    //Empty compare products for the user
    removeAll()
    {
        return this.httpClient2.delete("http://localhost:64550/api/compareproducts/");
    }
    
}