import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/ProductService';
import { RetailerService } from '../services/RetailerService';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductService,private router:Router,private retailer:RetailerService) { 
    this.products=this.productService.getallProducts().filter(p=>p.status=="modified");
  }

  ngOnInit(): void {
  }

  verify(product:Product)
  {
    this.router.navigate(['verify',product.productId]);
  }
  deleteRetailer(product:Product)
  {
    if(confirm("Are you sure you want to delete this Retailer"))
    {
      this.retailer.delete(product.retailerId);
      this.router.navigate(['admin']);
    }
  }
  addRetailer()
  {
    this.router.navigate(['addRetailer']);
  }
  
  addCategory()
  {
    this.router.navigate(['addCategory']);
  }
}
