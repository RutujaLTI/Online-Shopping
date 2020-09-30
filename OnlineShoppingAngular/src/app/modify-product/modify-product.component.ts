import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  product:Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  modifyProduct()
  {
    this.productService.updateProduct(this.product).subscribe();
  }

}
