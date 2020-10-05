import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CompareProductsService } from '../services/CompareProductsService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  products:Product[];
  message:string="";
  constructor(private compareProductsService:CompareProductsService,private router:Router) {
    //Get products in compare list for the user
    compareProductsService.getCompareProducts().subscribe(data=>{
      this.products=data;
    });
   }

  //Remove the product from compare list
  removeFromCompare(product:Product)
  {
    this.compareProductsService.removeProductFromCompare(product.productId).subscribe(d=>{
      this.products.splice(this.products.indexOf(product),1);
    });
  }

  // Show product details on click
   showDetails(id:number)
   {  
    this.router.navigate(['ViewDetails/'+id]);
   }
  ngOnInit(): void {
  }

}
