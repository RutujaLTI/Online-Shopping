import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private httpCilent:HttpClient)
    {

    }
    getallProducts():Product[]
    {
        var products:Product[]=[];
        var product=new Product();
        product.productId=1;
        product.retailerId=1;
        product.status="modified";
        product.unitPrice=10;
        product.productName="Book";
        products.push(product);
        console.log(products.length);
        return products;
    }
    getModifiedProducts():Observable<Product[]>
    {
        return this.httpCilent.get<Product[]>("");
    }
    getProducts(id:number):Observable<Product>
    {
        return this.httpCilent.get<Product>(""+id);
    }
    verifyProduct(id:number)
    {

    }
    addRemarks(id:number,remaks:string)
    {
        
    }
}