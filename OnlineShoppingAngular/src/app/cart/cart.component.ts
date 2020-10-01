import { Component, DoCheck, OnInit } from '@angular/core';
import {CartService} from "../services/CartService";
import {Observable} from "rxjs";
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ProductService } from '../services/ProductService';
import { CartModel } from '../models/cartModel';
import { User } from '../models/user';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {
  cartModels:CartModel[]=[];
  user:User;
  order:Order;
  cartTotal:number=0;
  constructor(private cservice:CartService,private local:LocalStorageService,private pService:ProductService)
  {
    this.order=new Order();
    this.user=this.local.retrieve('user');
    if(this.user!=null)this.cservice.getProductsFromCart(this.user.userId).subscribe((data)=>
    {
      data.forEach(v=>{
        var cartModel=new CartModel(pService,v);
        this.cartModels.push(cartModel);
      });
    });
  }
ngDoCheck(): void {
  this.cartTotal=0;
  this.cartModels.forEach((v)=>
  {
    this.cartTotal+=v.cart.quantity*v.product.productId;
  });
}


placeOrder()
{

}

removeFromCart(cartModel:CartModel)
{
  this.cservice.removeFromCart(cartModel.cart).subscribe((d)=>
    {
      this.cartModels.splice(this.cartModels.findIndex((c)=>c.cart.productId= cartModel.cart.productId),1);
    }
  )
}

}