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
    this.wishListService.getWishListProdutsFromApi(this.local.retrieve('user').userId).subscribe(data=>{
      this.products=data;
    });
   }

  removeFromWishList(product:Product)
  {
    this.wishListService.deleteWishListProdutFromApi(product.productId,this.local.retrieve('user').userId).subscribe(d=>{
      this.products.splice(this.products.indexOf(product),1);
    });
  }
   showDetails(id:number)
   {
    this.router.navigate(['ViewDetails/'+id]);
   }

  ngOnInit(): void {
  }

}
