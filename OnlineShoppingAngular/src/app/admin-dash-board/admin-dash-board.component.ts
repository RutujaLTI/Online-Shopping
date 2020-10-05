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
  }

  ngOnInit(): void {
    this.productService.getModifiedProducts().subscribe((data)=>{
      this.products=data.filter(p=>p.productStatus=="modified")
    });
    
  }

  verify(product:Product)
  {
    this.router.navigate(['verify',product.productId]);
  }
  deleteRetailer(product:Product)
  {
    if(confirm("Are you sure you want to delete this Retailer"))
    {
      this.retailer.deleteFromApi(product.retailerId).subscribe((data)=>
      {
        this.router.navigate(['admin']);
      });
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
