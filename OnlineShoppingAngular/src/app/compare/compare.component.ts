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
    compareProductsService.getCompareProducts().subscribe(data=>{
      this.products=data;
    });
   }

  removeFromCompare(product:Product)
  {
    this.compareProductsService.removeProductFromCompare(product.productId).subscribe(d=>{
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
