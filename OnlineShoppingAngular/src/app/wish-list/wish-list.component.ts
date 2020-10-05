import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Product } from '../models/product';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  products:Product[];
  message:string="";

  constructor(private wishListService:WishListService,private router:Router,private local:LocalStorageService) {
    //Get wishlist products of user
    this.wishListService.getWishListProductsFromApi(this.local.retrieve('user').userId).subscribe(data=>{
      this.products=data;
    });
   }

  //Remove product from wishlist of user and also from products retrieved in constructor
  removeFromWishList(product:Product)
  {
    this.wishListService.deleteWishListProductFromApi(product.productId,this.local.retrieve('user').userId).subscribe(d=>{
      this.products.splice(this.products.indexOf(product),1);
    });
  }

  //Show details of the product
   showDetails(id:number)
   {
    this.router.navigate(['ViewDetails/'+id]);
   }

  ngOnInit(): void {
  }

}
