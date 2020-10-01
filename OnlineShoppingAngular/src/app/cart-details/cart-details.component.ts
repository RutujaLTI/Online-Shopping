import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { CartModel } from '../models/cartModel';
import { Order } from '../models/order';
import { User } from '../models/user';
import { CartService } from '../services/CartService';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit,DoCheck {

  cartModels:CartModel[]=[];
  user:User;
  order:Order;
  cartTotal:number=0;
  constructor(private cservice:CartService,private local:LocalStorageService,private pService:ProductService,private router:Router)
  {
    this.order=new Order();
    this.user=this.local.retrieve('user');
    if(this.user!=null)this.cservice.getCartModelFromCart(this.user.userId).subscribe((data)=>
    {
      this.cartModels=data;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  this.order.userId=this.user.userId;
  this.order.orderTotal=this.cartTotal;
  this.cservice.checkoutFromCart(this.order).subscribe((d)=>
  {
    this.router.navigate(['checkout']);
  });
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
