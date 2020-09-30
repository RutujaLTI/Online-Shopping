import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient,private httpCilent3:HttpClient,private httpCilent4:HttpClient)
    {

    }
    getallProducts():Product[]
    {
        var products:Product[]=[];
        var product=new Product();
        product.productId=1;
        product.retailerId=1;
        product.productStatus="modified";
        product.productPrice=10;
        product.productName="Book";
        products.push(product);
        console.log(products.length);
        return products;
    }
    getModifiedProducts():Observable<Product[]>
    {
        return this.httpCilent.get<Product[]>("http://localhost:64550/api/products");
    }
    getProduct(id:number):Observable<Product>
    {
        return this.httpCilent2.get<Product>("http://localhost:64550/api/products/"+id);
    }
    updateProduct(product:Product)
    {
        console.log(product.productStatus);
        return this.httpCilent1.put("http://localhost:64550/api/products/"+product.productId,product);
    }
    addRemarks(id:number,remaks:string)
    {
        
    }

    addProduct(product:Product)
    {
        return this.httpCilent3.post("http://localhost:64550/api/products",product);
    }

    deleteProduct(id:number)
    {
        return this.httpCilent4.delete("http://localhost:64550/api/products/"+id);
    }

   
}