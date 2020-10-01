import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { CartModel } from '../models/cartModel';

@Injectable()
export class CartService
{
    constructor(private httpClient:HttpClient,private httpClient1:HttpClient,private htttp3:HttpClient)
    {

    }

    getProductsFromCart(id:number):Observable<Cart[]>
    {
        return this.htttp3.get<Cart[]>("http://localhost:64550/api/carts/"+id);
    }
    
    removeFromCart(cart:Cart)
    {
        return this.httpClient.delete('http://localhost:64550/api/carts?UserId='+cart.userId+'&ProductID='+cart.productId);
    }

    checkoutFromCart(order:Order) //remove from cart table and add in orders table
    {
        return this.httpClient.post("http://localhost:64550/api/order",order);
        
    }
    addCart(cart:Cart)
    {
        return this.httpClient.post("http://localhost:64550/api/carts",cart);
    }
    getCartModelFromCart(id:number):Observable<CartModel[]>
    {
        return this.httpClient.get<CartModel[]>('http://localhost:64550/api/cartmodel/'+id);
    }




}