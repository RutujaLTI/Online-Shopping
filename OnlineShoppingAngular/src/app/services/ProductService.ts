import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient,private httpCilent3:HttpClient,private httpCilent4:HttpClient)
    {

    }
    
    //Get all available products of active users
    getModifiedProducts():Observable<Product[]>
    {
        return this.httpCilent.get<Product[]>("http://localhost:64550/api/products");
    }

    //Get product by Product ID
    getProduct(id:number):Observable<Product>
    {
        return this.httpCilent2.get<Product>("http://localhost:64550/api/products/"+id);
    }

    //Update existing product
    updateProduct(product:Product)
    {
        return this.httpCilent1.put("http://localhost:64550/api/products/"+product.productId,product);
    }

    //Adds product to products table
    addProduct(product:Product)
    {
        return this.httpCilent3.post("http://localhost:64550/api/products",product);
    }

    //Sets product status to unavailable
    deleteProduct(id:number)
    {
        return this.httpCilent4.delete("http://localhost:64550/api/products/"+id);
    }

   
}