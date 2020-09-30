import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product:Product;
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  getProductById()
  {
    this.productService.getProduct(this.product.productId).subscribe(data=>{
    this.router.navigate(['']);// Product description in the box, route product details component
    });
  }

  deleteProduct()
  {
    this.productService.deleteProduct(this.product.productId).subscribe();
  }

}
