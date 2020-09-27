import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product;
  constructor() { 
    this.product=new Product("Wooden varnished Chair",300,"assets/images/chair.jpg");
  }

  ngOnInit(): void {
  }

}
