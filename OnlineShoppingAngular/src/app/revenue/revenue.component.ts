import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Retailer } from '../models/retailer';
import { RetailerService } from '../services/RetailerService';
import { Observable } from 'rxjs';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  products:Product[];
  retailer:Retailer;
  retId:number;//Retailer id from session
  constructor(private retailerService:RetailerService,private productService:ProductService) { 
    productService.getModifiedProducts().subscribe(data=>{
      this.products=data.filter(s=>s.retailerId==this.retId && s.productStatus=='Available');
    });
  }

  ngOnInit(): void {
  }

  getRevenue()  //get retailer id from session
  {
    this.retailerService.getRevenue(this.retailer.retailerId).subscribe(data=>{
      this.retailer=data;
    });
  }

}
