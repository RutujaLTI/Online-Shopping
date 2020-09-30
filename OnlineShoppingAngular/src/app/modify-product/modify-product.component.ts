import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  product:Product;
  constructor(private productService:ProductService,private aroute:ActivatedRoute,private route:Router) { 
    this.productService.getProduct(this.aroute.snapshot.params.id).subscribe((data)=>
    {
      this.product=data;
    });
  }

  ngOnInit(): void {
  }

  modifyProduct()
  {
    this.product.productStatus='modified';
    this.productService.updateProduct(this.product).subscribe((data)=>{
      this.route.navigate(['retailer/modifyList']);
    });
  }

}
