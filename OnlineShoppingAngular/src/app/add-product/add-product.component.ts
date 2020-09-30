import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product;
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
  }

  addProduct()
  {
    this.productService.addProduct(this.product).subscribe(d=>{
      
    });
  }

}
