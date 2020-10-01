import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable()
export class CartService
{
    constructor(private httpClient:HttpClient)
    {

    }

    getProductsFromCart(id:number):Observable<Cart[]>
    {
        return this.httpClient.get<Cart[]>("http://localhost:64550/api/carts/"+id);
    }
    
    removeFromCart(cart:Cart)
    {
        return this.httpClient.request("delete","http://localhost:64550/api/carts/"+cart.userId,{body:cart.productModel.productId});
    }

    checkoutFromCart(order:Order) //remove from cart table and add in orders table
    {
        return this.httpClient.post("http://localhost:64550/api/order",order);
        
    }




}