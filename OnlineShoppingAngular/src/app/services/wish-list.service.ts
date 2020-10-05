import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http:HttpClient,private http1:HttpClient) { }

  getWishListProductsFromApi(id:number):Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:64550/api/wishlist/"+id);
  }

  addWishListProductFromApi(Productid:number,UserId:number)
  {
    return this.http.post("http://localhost:64550/api/wishlist?ProductID="+Productid+"&UserId="+UserId,null);
  }
  
  deleteWishListProductFromApi(Productid:number,UserId:number)
  {
    return this.http1.delete("http://localhost:64550/api/wishlist?ProductID="+Productid+"&UserId="+UserId);
  }
}
