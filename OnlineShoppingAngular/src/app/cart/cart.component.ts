import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/CartService";
import {Observable} from "rxjs";
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cartData: CartModel;
  // cartTotal: Number;
  // subTotal: Number;
  order:Order;
  cartproducts:Cart[];
  cartTotal:number;
  userId:number;//from session
  cart:Cart;
  constructor(public cartService: CartService,private router:Router) { 
    cartService.getProductsFromCart(this.userId).subscribe(data=>{
      this.cartproducts=data;
    });
  }

  ngOnInit(): void {
    // this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    //  this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }
  // ChangeQuantity(Product_Id: Number, increaseQuantity: Boolean) {
  //   this.cartService.UpdateCartData(Product_Id, increaseQuantity);
  // }

  doCheck()
  { 
    this.cartproducts.forEach(element => {
      this.cartTotal+=element.quantity*element.productModel.productPrice;
    });
    
  }

  removeFromCart(cart:Cart)
  {
    this.cartService.removeFromCart(cart).subscribe();
  }

  placeOrder()
  { 
    this.order.orderTotal=this.cartTotal;
    this.order.userId=this.userId;
    this.cartService.checkoutFromCart(this.order).subscribe();
    this.cartService.removeFromCart(this.cart).subscribe();
    this.router.navigate(['checkout']);
  }

}