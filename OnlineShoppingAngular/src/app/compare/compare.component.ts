import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CompareProductsService } from '../services/CompareProductsService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  products:Product[];
  message:string="";
  constructor(private compareProductsService:CompareProductsService) {
    compareProductsService.getCompareProducts().subscribe(data=>{
      this.products=data;
    });
   }

  removeFromCompare(id:number)
  {
    this.compareProductsService.removeProductFromCompare(id).subscribe(d=>{
      this.message="Product removed from compare";
    });
  }
  
  ngOnInit(): void {
  }

}
