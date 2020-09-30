import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-productstatus',
  templateUrl: './productstatus.component.html',
  styleUrls: ['./productstatus.component.css']
})
export class ProductstatusComponent implements OnInit {
  products:Product[];
  retId:number;//get retailer id from session
  message:string="";
  constructor(private productService:ProductService) { 
    productService.getModifiedProducts().subscribe(data=>{
      this.products=data.filter(s=>s.retailerId==this.retId && s.productStatus!='Available');
    });
  }
 
  ngOnInit(): void {
  }

}
