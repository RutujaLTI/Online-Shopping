import {AddProduct } from '../models/addproduct.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AddproductService
{
    url = "";
    constructor(private http: HttpClient)
    {
    }
    public getProducts():Observable<AddProduct[]>
    {
       return this.http.get<AddProduct[]>(this.url);
    }
    public AddProduct(product:AddProduct):Observable<AddProduct>
    {
        let httpHeaders = new HttpHeaders()
        .set('Content-Type','application/json');
        let options = {
          headers:httpHeaders
        };
        return this.http.post<AddProduct>(this.url,product,options);
    }
    public delProduct(id:string):Observable<number>
  {
      let httpHeaders = new HttpHeaders()
      .set('Content-Type','application/json');
      return this.http.delete<number>(this.url+"/"+id);
  }
}